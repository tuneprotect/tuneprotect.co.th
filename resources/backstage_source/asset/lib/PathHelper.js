import {ROLE} from "../../config/config";

export function basename(path) {
    return path.replace(/\\/g, '/').replace(/.*\//, '');
}

export function checkPermission(matchPath, adminData) {


    if (matchPath[0].permission === undefined) {
        return true;
    }

    if (adminData.role === ROLE.SUPER_ADMIN) {
        return true;
    }

    const compareWith = matchPath[0].permissionCheckWith !== undefined ? matchPath[0].permissionCheckWith : matchPath[0].id;

    if(compareWith.endsWith('.detail')){
        return true;
    }




    return matchPath[0].permission.some(p => adminData.role.some(r => r.startsWith(compareWith) && r.endsWith(p)));


}
