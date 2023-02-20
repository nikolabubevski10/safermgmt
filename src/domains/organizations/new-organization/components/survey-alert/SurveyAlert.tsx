import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import Input from '../input/Input';
import TextArea from '../text-area/TextArea';
import Card from '../card/Card';
import {
  Container,
  FormData,
  InputWrapper,
  FieldContainer,
  Label,
  Row,
  CardWrapper,
  ColorRow,
} from './SurveyAlertStyles';
import {
  changeOrgSurveyAlertFields,
  setSurveyAlertFormChecks,
  setSurveyAlertColorChange,
} from '../../../state/OrganizationsActions';
import ColorCard from '../color-card/ColorCard';

export interface IColorType {
  hex: string;
}

const SurveyAlert: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const organizationsStore = useAppSelector(
    ({ organizations }) => organizations,
  );

  const [colorPickerPrimaryOpen, setColorPickerPrimaryOpen] = useState(false);
  const [colorPickerAccentOpen, setColorPickerAccentOpen] = useState(false);

  const { organizationSurveyAlertWithChanges } = organizationsStore;

  const tSurveyEmil = t('Survey Email');
  const tSubject = t('Subject');
  const tBodyText = t('Body Text');
  const tMedicalAlert = t('Medical Alert');
  const tBodyAsHTML = t('BodyAsHTML');
  const tEmailAlertContactConfig = t('Email Alert Contact Config');
  const tPrimaryColor = t('Primary color');
  const tAccentColor = t('Accent color');
  const tTheme = t('Theme');

  const handleOrgSurveyAlertInputsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    category: string,
  ) => {
    dispatch(changeOrgSurveyAlertFields(e, category));
  };

  const handleActiveChange = (
    status: boolean,
    name: string,
    category: string,
  ) => {
    dispatch(setSurveyAlertFormChecks(!status, name, category));
  };

  const handleColorChange = (color: IColorType, isPrimary: boolean) => {
    console.log('object', color);
    const colorField = isPrimary ? 'primaryColor' : 'accentColor';
    const colorIs = color.hex;
    dispatch(setSurveyAlertColorChange(colorIs, 'theme', colorField));
  };

  const handleToggle = (primary: boolean) => {
    if (primary) {
      setColorPickerPrimaryOpen(true);
      setColorPickerAccentOpen(false);
    } else {
      setColorPickerAccentOpen(true);
      setColorPickerPrimaryOpen(false);
    }
  };

  useEffect(() => {
    console.log('colorPickerPrimaryOpen =>', colorPickerPrimaryOpen);
  }, [colorPickerPrimaryOpen]);

  const closeColorPicker = () => {
    setColorPickerPrimaryOpen(false);
    setColorPickerAccentOpen(false);
  };

  return (
    <Container>
      <FormData>
        <FieldContainer>
          <Label>{tSurveyEmil}</Label>
          <InputWrapper>
            <Input
              value={organizationSurveyAlertWithChanges.surveyEmail.subject}
              onChange={(e) =>
                handleOrgSurveyAlertInputsChange(e, 'surveyEmail')
              }
              name="subject"
              isValid={true}
              isHighlighted={false}
              label={tSubject}
              longWidth={false}
              removeleftMargin={true}
            />

            <TextArea
              value={organizationSurveyAlertWithChanges.surveyEmail.bodyText}
              name="bodyText"
              onChange={(e) =>
                handleOrgSurveyAlertInputsChange(e, 'surveyEmail')
              }
              isValid={true}
              label={tBodyText}
              isHighlighted={false}
              removeleftMargin={true}
            />
          </InputWrapper>
        </FieldContainer>

        <FieldContainer>
          <Label>{tMedicalAlert}</Label>
          <InputWrapper>
            <Input
              value={organizationSurveyAlertWithChanges.medicalAlert.subject}
              onChange={(e) =>
                handleOrgSurveyAlertInputsChange(e, 'medicalAlert')
              }
              name="subject"
              isValid={true}
              isHighlighted={false}
              label={tSubject}
              longWidth={false}
              removeleftMargin={true}
            />

            <TextArea
              value={organizationSurveyAlertWithChanges.medicalAlert.bodyText}
              name="bodyText"
              onChange={(e) =>
                handleOrgSurveyAlertInputsChange(e, 'medicalAlert')
              }
              isValid={true}
              label={tBodyText}
              isHighlighted={false}
              removeleftMargin={true}
            />
          </InputWrapper>
        </FieldContainer>
        <FieldContainer>
          <Label>{tEmailAlertContactConfig}</Label>
          <InputWrapper>
            <Row>
              <CardWrapper
                onClick={() =>
                  handleActiveChange(
                    organizationSurveyAlertWithChanges.emailAlertContactConfig
                      .bodyAsHTML,
                    'bodyAsHTML',
                    'emailAlertContactConfig',
                  )
                }
              >
                <Card
                  isActive={
                    organizationSurveyAlertWithChanges.emailAlertContactConfig
                      .bodyAsHTML
                  }
                >
                  {tBodyAsHTML}
                </Card>
              </CardWrapper>

              <InputWrapper>
                <Input
                  value={
                    organizationSurveyAlertWithChanges.emailAlertContactConfig
                      .subject
                  }
                  onChange={(e) =>
                    handleOrgSurveyAlertInputsChange(
                      e,
                      'emailAlertContactConfig',
                    )
                  }
                  name="subject"
                  isValid={true}
                  isHighlighted={false}
                  label={tSubject}
                  longWidth={false}
                  removeleftMargin={true}
                />

                <TextArea
                  value={
                    organizationSurveyAlertWithChanges.emailAlertContactConfig
                      .bodyText
                  }
                  name="bodyText"
                  onChange={(e) =>
                    handleOrgSurveyAlertInputsChange(
                      e,
                      'emailAlertContactConfig',
                    )
                  }
                  isValid={true}
                  label={tBodyText}
                  isHighlighted={false}
                  removeleftMargin={true}
                />
              </InputWrapper>
            </Row>
          </InputWrapper>
        </FieldContainer>

        <FieldContainer>
          <Label>{tTheme}</Label>
          <ColorRow>
            <CardWrapper>
              <ColorCard
                isActive={true}
                color={organizationSurveyAlertWithChanges.theme.primaryColor}
                handleColorPickerToggle={() => handleToggle(true)}
                showColorPicker={colorPickerPrimaryOpen}
                handleColorChange={(color) => handleColorChange(color, true)}
                closeColorPicker={closeColorPicker}
              >
                {tPrimaryColor}
              </ColorCard>
            </CardWrapper>
            <CardWrapper>
              <ColorCard
                isActive={true}
                color={organizationSurveyAlertWithChanges.theme.accentColor}
                handleColorPickerToggle={() => handleToggle(false)}
                showColorPicker={colorPickerAccentOpen}
                handleColorChange={(color) => handleColorChange(color, false)}
                closeColorPicker={closeColorPicker}
              >
                {tAccentColor}
              </ColorCard>
            </CardWrapper>
          </ColorRow>
        </FieldContainer>
      </FormData>
    </Container>
  );
};

export default SurveyAlert;
