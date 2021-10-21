import {SharedModel} from "../../util/shared-model";
import {Page} from "../page/page";

export class Role extends SharedModel {
    roleId: number;
    roleName: string;
    roleDescription: string;

    pages: Page[];
}