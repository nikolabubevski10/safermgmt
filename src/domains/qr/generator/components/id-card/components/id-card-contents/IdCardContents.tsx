import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  IdBgImg,
  IdCard,
  IdCardInner,
  NameText,
  InfoContainer,
  LabelText,
  InfoText,
  SideAQrContainer,
  SideAQrBackground,
  SideBQrContainer,
  SideBQrBackground,
} from './IdCardContentsStyles';
import { IPerson, ISchool, IContact } from '../../../../state/types';
import idCardSideA from './assets/idCardASide.png';
import idCardSideB from './assets/idCardBSide.png';
import Logo from './components/logo/Logo';
import QRcode from 'qrcode.react';
import Theme from '../../../../../../../assets/styles/Theme';
import saferQrLogo from '../../../shared/download/assets/saferQrLogo.png';

const id = 'ID';
const org = 'Organization';

interface Props {
  currentPerson: IPerson | IContact | undefined;
  currentSchool: ISchool | undefined;
}

const IdCardCard: React.FC<Props> = ({
  currentSchool,
  currentPerson,
}: Props) => {
  const { t } = useTranslation();
  const tId = t(id);
  const tOrg = t(org);

  const currentSchoolName = currentSchool?.name || '';

  const currentPersonName = currentPerson
    ? `${currentPerson.firstName} ${currentPerson.lastName}`
    : '';

  const currentPersonId = currentPerson?.id || '';
  const currentPersonValueToEncode = currentPerson?.valueToEncode || '';

  const sideAQrSize = 70;
  const sideAQrLogoSize = sideAQrSize / 3;
  const sideBQrSize = 160;
  const sideBQrLogoSize = sideBQrSize / 3;

  return (
    <Container>
      <IdCard>
        <IdBgImg src={idCardSideA} />
        <IdCardInner>
          <Logo />
          <NameText>{currentPersonName}</NameText>
          <InfoContainer>
            <LabelText>{tOrg}</LabelText>
            <InfoText>{currentSchoolName}</InfoText>
            <LabelText>{tId}</LabelText>
            <InfoText>{currentPersonId}</InfoText>
            <SideAQrContainer>
              <SideAQrBackground>
                <QRcode
                  value={currentPersonValueToEncode}
                  size={sideAQrSize}
                  includeMargin={false}
                  level={'Q'}
                  bgColor={Theme.primaryWhite}
                  fgColor={Theme.primaryBlueDark}
                  imageSettings={{
                    src: saferQrLogo,
                    width: sideAQrLogoSize,
                    height: sideAQrLogoSize,
                  }}
                />
              </SideAQrBackground>
            </SideAQrContainer>
          </InfoContainer>
        </IdCardInner>
      </IdCard>
      <IdCard>
        <IdBgImg src={idCardSideB} />
        <IdCardInner>
          <Logo />
          <SideBQrContainer>
            <SideBQrBackground>
              <QRcode
                value={currentPersonValueToEncode}
                size={sideBQrSize}
                includeMargin={false}
                level={'Q'}
                bgColor={Theme.primaryWhite}
                fgColor={Theme.primaryBlueDark}
                imageSettings={{
                  src: saferQrLogo,
                  width: sideBQrLogoSize,
                  height: sideBQrLogoSize,
                }}
              />
            </SideBQrBackground>
          </SideBQrContainer>
        </IdCardInner>
      </IdCard>
    </Container>
  );
};

export default IdCardCard;
