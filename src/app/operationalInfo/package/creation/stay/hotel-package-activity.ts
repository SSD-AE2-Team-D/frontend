import {SharedModel} from "../../../../util/shared-model";

export class HotelPackageActivity extends SharedModel{
    hotelPackageActivityId: number;
    activityName: string;
    activityTypeId: number;
    hotelPackageId: number;

    isAssigned: boolean;
}