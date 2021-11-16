import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output, QueryList,
    ViewChild,
    ViewChildren,
    ViewEncapsulation
} from "@angular/core";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {HotelService} from "../../../../service/data/hotel.service";
import {RolePermission} from "../../../../shared/rolePermission/rolePermission";
import {NgForm} from "@angular/forms";
import {HotelPackage} from "./hotel-package";
import {Hotel} from "../../../hotel/hotel";
import {RoomType} from "../../../hotel/room-type";
import {take} from "rxjs/operators";
import {MasterStatus} from "../../../../util/master-status";
import {PackageService} from "../../../../service/data/package.service";
import {ActivityDisplayComponent} from "./activityDisplay/activity-display.component";
import {HotelPackageActivity} from "./hotel-package-activity";
import {ConfirmDialogComponent, ConfirmDialogModel} from "../../../../shared/confirm-dialog/confirm-dialog.component";

@Component({
    selector: 'app-stay-package-creation',
    templateUrl: './stay.component.html',
    styleUrls: ['./stay.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class StayComponent implements OnInit {
    @Input() hotelPackage: HotelPackage;
    @Input() isUpdate: Boolean;
    @Input() isNew: Boolean;
    @Input() actionType: string;
    @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
    @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
    @ViewChild('stayForm') stayForm: NgForm;
    hotelList: Hotel[];
    roomTypeList: RoomType[];
    statusList: MasterStatus[];
    @ViewChild(ActivityDisplayComponent) activityDisplayComponent: ActivityDisplayComponent;
    @ViewChildren(ActivityDisplayComponent) activityDisplayList: QueryList<ActivityDisplayComponent>;

    constructor(private snackBar: MatSnackBar,
                public dialog: MatDialog,
                private hotelService: HotelService,
                private packageService: PackageService,
                public rolePermission: RolePermission) {
    }

    ngOnInit() {
        if (this.hotelPackage == null) {
            this.hotelPackage = new HotelPackage();
            this.isUpdate = false;
            this.isNew = false;
            this.actionType = 'Create';
        }
        this.hotelService.getHotelList(Number(window.sessionStorage.getItem('organizationId')))
            .pipe(take(1)).subscribe(
            response => {
                this.hotelList = response;
            }
        );

        if (this.isUpdate) {
            this.packageService.getMasterDataStatus('UPDATE')
                .pipe(take(1)).subscribe(
                response => this.statusList = response
            );
        } else {
            this.packageService.getMasterDataStatus('CREATE')
                .pipe(take(1)).subscribe(
                response => this.statusList = response
            );
        }

        if (this.hotelPackage.roomTypeId) {
            this.getRoomTypeList();
        }

    }

    getRoomTypeList() {
        this.hotelService.getRoomTypeListHotelWise(this.hotelPackage.hotelId).pipe(take(1)).subscribe(
            response => this.roomTypeList = response
        );
    }

    public resetForm() {
        this.stayForm.resetForm();
        this.activityDisplayComponent.isUnassigned();
    }

    public createHotelPackage(): void {
        const packageActivityList: HotelPackageActivity[] = [];
        this.activityDisplayComponent.packageActivityList.forEach(selectedActivity => {
            if (selectedActivity.isAssigned) {
                const packageActivity = new HotelPackageActivity();
                packageActivity.activityTypeId = selectedActivity.activityTypeId;
                packageActivity.activityName = selectedActivity.activityName;
                packageActivity.status = this.hotelPackage.status;
                packageActivityList.push(packageActivity);
            }
        });

        this.hotelPackage.hotelPackageActivities = packageActivityList;
        this.hotelPackage.organizationId = Number(window.sessionStorage.getItem('organizationId'));

        this.packageService.postHotelPackage(this.hotelPackage).pipe(take(1)).subscribe((hotelPackage) => {
            this.hotelPackage = hotelPackage;
            this.hotelPackage.hotelPackageActivities.forEach(selectedPackage => {
                this.activityDisplayList.forEach(activityDisplay => {
                    activityDisplay.actionType = 'Update';
                })
            })

            this.snackBar.open('Hotel Package Saved', 'success', <MatSnackBarConfig>{
                duration: 3000
            });
            this.isUpdate = true;
            this.isNew = true;
            this.actionType = 'Update';
        }, (error) => {
            this.snackBar.open('Hotel Package already exist', "error", <MatSnackBarConfig>{
                panelClass: ['red-snackbar']
            });
        })
    }

    public updateHotelPackage(): void {
        const packageActivityList: HotelPackageActivity[] = [];
        this.activityDisplayComponent.packageActivityList.forEach(selectedActivity => {
            if (selectedActivity.isAssigned) {
                const packageActivity = new HotelPackageActivity();
                packageActivity.activityTypeId = selectedActivity.activityTypeId;
                packageActivity.activityName = selectedActivity.activityName;
                packageActivity.status = this.hotelPackage.status;
                packageActivity.hotelPackageId = this.hotelPackage.hotelPackageId;
                packageActivityList.push(packageActivity);
            }
        });

        this.hotelPackage.hotelPackageActivities = packageActivityList;
        this.packageService.putHotelPackage(this.hotelPackage).subscribe(hotelPackage => {
            this.hotelPackage = hotelPackage;
            this.hotelPackage.hotelPackageActivities.forEach(selectedPackage => {
                this.activityDisplayList.forEach(activityDisplay => {
                    activityDisplay.actionType = 'Update';
                })
            })
            this.snackBar.open('Hotel Package updated', 'success', <MatSnackBarConfig>{
                duration: 3000
            });
        }, error => {
            this.snackBar.open('Hotel Package  exist', "error", <MatSnackBarConfig>{
                panelClass: ['red-snackbar']
            });
        })
    }

    public deleteHotelPackage(): void {
        const hotelPackageId = this.hotelPackage.hotelPackageId;
        const message = 'Are you sure you want to delete this Package?';
        const dialogData = new ConfirmDialogModel('Confirm Action', message);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '400px',
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            this.packageService.deleteHotelPackage(this.hotelPackage).subscribe(page => {
                this.snackBar.open('Package deleted', 'success', {
                    duration: 3000
                });
                this.isUpdate = false;
                this.isNew = false;
                this.onDelete.emit(hotelPackageId);
                this.resetForm();
                this.hotelPackage.hotelPackageId = null;
            }, error => {
                this.snackBar.open(error.error, 'error', <MatSnackBarConfig>{
                    panelClass: ['red-snackbar']
                });
            });
        });
    }
}