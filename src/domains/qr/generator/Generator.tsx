import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, CardContainer, HighlightStyles } from './GeneratorStyles';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { launchQRGenerator } from './state/GeneratorActions';
import SearchCard from './components/search-card/SearchCard';
import IdCard from './components/id-card/IdCard';
import RoleSelector from './components/role-selector/RoleSelector';

const header = 'ID Cards Generator';

const Generator: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentSchoolId } = useAppSelector(({ navigation }) => navigation);

  useEffect(() => {
    dispatch(launchQRGenerator());
  }, [currentSchoolId]);

  const { t } = useTranslation();
  const tHeader = t(header);
  return (
    <Container>
      <HighlightStyles />
      <h1>{tHeader}</h1>
      <RoleSelector />
      <CardContainer>
        <SearchCard />
        <IdCard />
      </CardContainer>
    </Container>
  );
};

export default Generator;
