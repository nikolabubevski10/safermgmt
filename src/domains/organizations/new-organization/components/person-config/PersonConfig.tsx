import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { setPersonConfigFormChecks } from '../../../state/OrganizationsActions';
import Card from '../card/Card';
import {
  Container,
  CheckContainer,
  CardWrapper,
  CardRow,
  PersonType,
} from './PersonConfigStyles';

const PersonConfig: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const tStaff = t('Staff');
  const tStudent = t('Student');
  const tVisitor = t('Visitor');
  const tAddEnabled = t('Add Enabled');
  const tEditEnabled = t('Edit Enabled');

  const organizationsStore = useAppSelector(
    ({ organizations }) => organizations,
  );

  const { organizationPersonConfigWithChanges } = organizationsStore;

  const handleActiveChange = (
    status: boolean,
    personType: string,
    name: string,
  ) => {
    dispatch(setPersonConfigFormChecks(!status, personType, name));
  };

  return (
    <Container>
      <CheckContainer>
        <PersonType>{tStaff}</PersonType>
        <CardRow>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPersonConfigWithChanges.staff.addEnabled,
                'staff',
                'addEnabled',
              )
            }
          >
            <Card
              isActive={organizationPersonConfigWithChanges.staff.addEnabled}
            >
              {tAddEnabled}
            </Card>
          </CardWrapper>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPersonConfigWithChanges.staff.editEnabled,
                'staff',
                'editEnabled',
              )
            }
          >
            <Card
              isActive={organizationPersonConfigWithChanges.staff.editEnabled}
            >
              {tEditEnabled}
            </Card>
          </CardWrapper>
        </CardRow>
      </CheckContainer>

      <CheckContainer>
        <PersonType>{tStudent}</PersonType>
        <CardRow>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPersonConfigWithChanges.student.addEnabled,
                'student',
                'addEnabled',
              )
            }
          >
            <Card
              isActive={organizationPersonConfigWithChanges.student.addEnabled}
            >
              {tAddEnabled}
            </Card>
          </CardWrapper>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPersonConfigWithChanges.student.editEnabled,
                'student',
                'editEnabled',
              )
            }
          >
            <Card
              isActive={organizationPersonConfigWithChanges.student.editEnabled}
            >
              {tEditEnabled}
            </Card>
          </CardWrapper>
        </CardRow>
      </CheckContainer>

      <CheckContainer>
        <PersonType>{tVisitor}</PersonType>
        <CardRow>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPersonConfigWithChanges.visitor.addEnabled,
                'visitor',
                'addEnabled',
              )
            }
          >
            <Card
              isActive={organizationPersonConfigWithChanges.visitor.addEnabled}
            >
              {tAddEnabled}
            </Card>
          </CardWrapper>
          <CardWrapper
            onClick={() =>
              handleActiveChange(
                organizationPersonConfigWithChanges.visitor.editEnabled,
                'visitor',
                'editEnabled',
              )
            }
          >
            <Card
              isActive={organizationPersonConfigWithChanges.visitor.editEnabled}
            >
              {tEditEnabled}
            </Card>
          </CardWrapper>
        </CardRow>
      </CheckContainer>
    </Container>
  );
};

export default PersonConfig;
