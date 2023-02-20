import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import useScreenSizes from '../../../../hooks/screenSizes/useScreenSizes';
import getTime from './utils/getTime';
import Logo from './components/logo/Logo';
import ExitIcon from './components/exit-icon/ExitIcon';
import {
  ButtonText,
  Container,
  ExitContainer,
  InnerContainer,
  LogoContainer,
  LogoSpanDark,
  LogoText,
  Time,
} from './HeaderStyles';

const exitText = 'Exit';

interface Props {
  openExitModal: () => void;
  showTime?: boolean;
}

const Header: React.FC<Props> = ({
  openExitModal,
  showTime = false,
}: Props) => {
  const { t } = useTranslation();
  const { mobile, mobileLarge } = useScreenSizes();
  const isMobile = mobile || mobileLarge;

  const [time, setTime] = useState<string>(getTime(new Date()));

  useEffect(() => {
    setInterval(() => {
      setTime(getTime(new Date()));
    }, 1000);
  }, []);

  const tExitText = t(exitText);

  return (
    <Container>
      <LogoContainer>
        <Logo large={isMobile} />

        {!isMobile && (
          <LogoText>
            Safer <LogoSpanDark>Management</LogoSpanDark>
          </LogoText>
        )}
      </LogoContainer>

      <InnerContainer>
        {showTime && <Time>{time}</Time>}

        <ExitContainer onClick={openExitModal}>
          {!isMobile && <ButtonText>{tExitText}</ButtonText>}
          <ExitIcon />
        </ExitContainer>
      </InnerContainer>
    </Container>
  );
};

export default Header;
