import { hasPermission } from '..';
import { PERMISSION_MODE } from '../../../constants';
import { PermissionData } from '../../../lib/redux/slices/permissionsSlice';

type modulePermissionCheck = {
  permissionsControl: PermissionData;
  moduleName: number;
};
export const modulePermissionCheck = ({
  moduleName,
  permissionsControl,
}: modulePermissionCheck) => {
  const addPermission = hasPermission(permissionsControl, moduleName, PERMISSION_MODE.add);
  const editPermission = hasPermission(permissionsControl, moduleName, PERMISSION_MODE.edit);
  const deletePermission = hasPermission(permissionsControl, moduleName, PERMISSION_MODE.delete);
  const viewPermission = hasPermission(permissionsControl, moduleName, PERMISSION_MODE.view);

  return {
    addPermission,
    editPermission,
    deletePermission,
    viewPermission,
  };
};
