import React from 'react';
import { DropLine, LevelTitle, DropList } from './DropDownListStyles';
import { IAccessLevel, IOrganization } from '../../../../types';

interface IDropList {
  listData: IAccessLevel[] | IOrganization[];
  handleAccessChange?: (item: string, status: boolean) => void;
  handleOrganizationChange?: (item: string, status: boolean) => void;
}

const DropDownList: React.FC<IDropList> = ({
  listData,
  handleAccessChange,
  handleOrganizationChange,
}: IDropList) => {
  return (
    <DropList>
      {listData.map((item: IAccessLevel | IOrganization) => (
        <DropLine key={item.name}>
          <input
            type="checkbox"
            onChange={() => {
              if (typeof handleAccessChange === 'function') {
                handleAccessChange(item.name, item.isActive);
              }
              if (typeof handleOrganizationChange === 'function') {
                handleOrganizationChange(item.name, item.isActive);
              }
            }}
            checked={item.isActive}
          />
          <LevelTitle>{item.title || item.name}</LevelTitle>
        </DropLine>
      ))}
    </DropList>
  );
};

export default DropDownList;
