import {Injectable} from '@angular/core';

@Injectable()
export class RolePermission {

    public filterPermission(role: any): boolean {
        const userRoles = localStorage.getItem('userAuthorityList');
        // @ts-ignore
        return userRoles.includes(role);
    }
}
