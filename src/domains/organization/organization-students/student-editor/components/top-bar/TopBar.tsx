import React from 'react';
import BackButton from './components/back-button/BackButton';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../../state/hooks';
import { Container, TopInner, BackButtonContainer, Name } from './TopBarStyles';
import { setShowSaveModal } from '../../../state/OrgStudentsActions';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../../../../globals';

const header = 'Student Detail';

const TopBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isSaved, hasBeenChanged } = useAppSelector(
    ({ orgStudents }) => orgStudents,
  );
  const history = useHistory();
  const { t } = useTranslation();
  const tHeader = t(header);

  const handleClick = () => {
    if (!isSaved && hasBeenChanged) {
      dispatch(setShowSaveModal(true));
    } else {
      history.push(PATHS.orgStudentsAll);
    }
  };

  return (
    <Container>
      <TopInner>
        <BackButtonContainer>
          <BackButton onClick={handleClick} />
        </BackButtonContainer>
        <Name>{tHeader}</Name>
      </TopInner>
    </Container>
  );
};

export default TopBar;
