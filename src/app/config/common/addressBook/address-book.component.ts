import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from "@angular/core";
import {AddressBook} from "../../../shared/entity/address-book";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-address-book',
    templateUrl: './address-book.component.html',
    styleUrls: ['./address-book.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AddressBookComponent implements OnInit {
    @Input() addressBook: AddressBook;
    @Input() isUpdate: Boolean;
    @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
    @ViewChild('addressBookForm') addressBookForm: NgForm;
    emailPattern = '^(([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5}){1,25})*$';

    constructor(){}

    ngOnInit() {
        if (this.addressBook == null) {
            this.addressBook = new AddressBook();
            this.isUpdate = false;
        }
    }

    isNumber(event: KeyboardEvent) {
        const allowedChars = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));
        if (event.keyCode > 31 && !allowedChars.has(event.keyCode)) {
            event.preventDefault();
        }
    }
}