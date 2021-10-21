import {SharedModel} from "../../util/shared-model";
import {Module} from "../module/module";
import {Authority} from "../authority/authority";

export class Page extends SharedModel {
    pageId: number;
    pageName: string;
    description: string;
    moduleId: number;
    urlPattern: string;

    module: Module;

    authorities: Authority[];
}