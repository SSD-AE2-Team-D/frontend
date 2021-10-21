import {SharedModel} from "../../util/shared-model";

export class AddressBook extends SharedModel{
    addressBookId: number;
    addressOne: string;
    addressTwo: string;
    zip: string;
    fax: string;
    email: string;
    telephone: string;
    mobile: string;
    website: string;


}