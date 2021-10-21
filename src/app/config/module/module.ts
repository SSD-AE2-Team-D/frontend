import {SharedModel} from "../../util/shared-model";

export class Module extends SharedModel{
    moduleId: number;
    moduleName: string;
    description: string;
    moduleCode: string;
    urlPattern: string;
}