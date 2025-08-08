import { ModulePermissions, PermissionData } from '../../lib/redux/slices/permissionsSlice';

export const hasPermission = (
  permissionsControl: PermissionData,
  moduleName: number,
  permissionType: string
): boolean => {
  if (permissionsControl?.modules && permissionsControl?.modules?.length > 0) {
    const module = permissionsControl.modules.find((item) => item.name === moduleName);
    return module ? module.permissions[permissionType as keyof ModulePermissions] : false;
  }
  return false;
};
