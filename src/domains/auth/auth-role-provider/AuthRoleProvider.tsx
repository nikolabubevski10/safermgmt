import React, { useMemo } from 'react';
import { RolesEnum } from './assets/rolesEnum';
import { useAppSelector } from '../../../state/hooks';

interface Props {
  allowedRoles: (keyof typeof RolesEnum)[];
  children: React.ReactElement;
}

const AuthRoleProvider: React.FC<Props> = ({
  allowedRoles,
  children,
}: Props) => {
  const { user } = useAppSelector(({ auth }) => auth);
  const roles = user.roles || [];

  const hasPermission = useMemo(() => {
    return allowedRoles.some((allowedRole) => roles.includes(allowedRole));
  }, [user]);

  return hasPermission ? children : null;
};

export default AuthRoleProvider;
