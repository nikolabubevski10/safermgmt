import React from 'react';
import {
  Container,
  MobileBg,
  MobileLargeImage,
  TabletImage,
  HandDeviceImg,
  DesktopBg,
  MobileHandDevice,
} from './HandDeviceStyles';
import desktopHandDevice from './assets/desktopHandDevice.png';
import desktopBg from './assets/desktopBg.png';
import tabletImage from './assets/tabletImage.png';
import mobileBg from './assets/mobileBg.png';
import mobileLargeImage from './assets/mobileLarge.png';
import mobileHandDevice from './assets/mobileHandDevice.png';

const HandDevice: React.FC = () => {
  return (
    <Container>
      <MobileBg src={mobileBg} />
      <MobileHandDevice src={mobileHandDevice} />
      <MobileLargeImage src={mobileLargeImage} />
      <TabletImage src={tabletImage} />
      <DesktopBg src={desktopBg} />
      <HandDeviceImg src={desktopHandDevice} />
    </Container>
  );
};

export default HandDevice;
