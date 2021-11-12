import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {RoleService} from "../../../service/data/role.service";
import {UserService} from "../../../service/data/user.service";
import {Role} from "../role";
import {take} from "rxjs/operators";

@Component({
    selector: 'role-display',
    templateUrl: './role-display.component.html',
    encapsulation: ViewEncapsulation.None
})
export class RoleDisplayComponent implements OnInit {
    @Input() userId: number;
    @Input() actionType: string;
    @Input() roleList: Role[];

    constructor( private roleService: RoleService,
                 private userService: UserService){

    }

    ngOnInit() {
        if (this.actionType === 'Create') {
            this.roleService.getRoleList().pipe(take(1))
                .subscribe(roleList => this.roleList = roleList);
        }

        if (this.actionType === 'Update') {
            if (this.userId) {
                this.userService.getRolesByUserId(this.userId).pipe(take(1))
                    .subscribe(roleList => {
                        this.roleList = roleList
                        if (this.roleList) {
                            if (this.roleList.length !== null && this.roleList.length > 0) {
                                this.roleList.forEach(role => {
                                    role.isAssigned = true;
                                })
                            } else {
                                this.roleService.getRoleList().pipe(take(1))
                                    .subscribe(roleList => this.roleList = roleList);
                            }
                        }
                    });
            }
        }
    }

    public isUnassigned(): void {
        if (this.roleList.length !== null && this.roleList.length > 0) {
            this.roleList.forEach(role => {
                if (role.isAssigned) {
                    role.isAssigned = false;
                }
            })
        }
    }
}