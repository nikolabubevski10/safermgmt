import React from 'react';
import BackButton from './components/back-button/BackButton';
import { useTranslation } from 'react-i18next';
import SaveSuccess from './components/save-success/SaveSuccess';
import { useAppDispatch, useAppSelector } from '../../../../../../state/hooks';
import {
  LargeScreenTopContainer,
  LargeScreenTopInner,
  BackButtonContainer,
  Name,
  LargeScreenSaveButton,
  SmallScreenTopContainer,
  SmallScreenTopInner,
  SmallScreenSaveButton,
  SaveButtonContainer,
} from './TopBarStyles';
import { setShowSaveModal } from '../../../state/SurveysActions';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../../../../globals';

const saveText = 'Save Updates';

interface Props {
  save: () => void;
  surveyName: string;
  showSaveSuccess: boolean;
}

const TopBar: React.FC<Props> = ({
  save,
  surveyName,
  showSaveSuccess,
}: Props) => {
  const dispatch = useAppDispatch();
  const surveysStore = useAppSelector(({ surveys }) => surveys);
  const { isSaved, hasBeenChanged, isLoading } = surveysStore;
  const canSave = hasBeenChanged && !isSaved;
  const history = useHistory();
  const { t } = useTranslation();
  const tSaveText = t(saveText);

  const handleClick = () => {
    if (!isSaved && hasBeenChanged) {
      dispatch(setShowSaveModal(true));
    } else {
      history.push(PATHS.surveysAll);
    }
  };

  const title = isLoading ? '' : surveyName;
  return (
    <>
      <LargeScreenTopContainer>
        <LargeScreenTopInner>
          <BackButtonContainer>
            <BackButton onClick={handleClick} />
          </BackButtonContainer>
          <Name>{title}</Name>
        </LargeScreenTopInner>
        <SaveButtonContainer>
          <LargeScreenSaveButton onClick={save} isDisabled={!canSave}>
            {tSaveText}
          </LargeScreenSaveButton>
          {showSaveSuccess && <SaveSuccess />}
        </SaveButtonContainer>
      </LargeScreenTopContainer>
      <SmallScreenTopContainer>
        <SmallScreenTopInner>
          <BackButton onClick={handleClick} />
          <SaveButtonContainer>
            <SmallScreenSaveButton onClick={save} isDisabled={!canSave}>
              {tSaveText}
            </SmallScreenSaveButton>
            {showSaveSuccess && <SaveSuccess />}
          </SaveButtonContainer>
        </SmallScreenTopInner>
        <Name>{title}</Name>
      </SmallScreenTopContainer>
    </>
  );
};

export default TopBar;
