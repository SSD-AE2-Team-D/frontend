import {Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Module} from "./module";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-module-creation',
    templateUrl: './module-creation.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ModuleCreationComponent implements OnInit {
    @Input() module: Module;
    @Input() isUpdate: Boolean;
    @Input() isNew: Boolean;
    @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
    @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
    @ViewChild('moduleForm') moduleForm: NgForm;
    statusList: any[];

    constructor(private snackBar: MatSnackBar,
                public dialog: MatDialog,){

    }
    ngOnInit() {
        if (this.module == null) {
            this.module = new Module();
            this.isUpdate = false;
            this.isNew = false;
        }
    }

}