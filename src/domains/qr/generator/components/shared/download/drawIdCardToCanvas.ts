import { Theme } from '../../../../../../assets/styles/Theme';
import saferQrLogo from './assets/saferQrLogo.png';
import saferWhiteLogo from './assets/saferWhiteLogo.png';
import idDoubleBackground from './assets/idDoubleBg.png';
import wrapText from './wrapText';
import roundRect from './roundRect';
import QRCode, { QRCodeToDataURLOptions } from 'qrcode';

export interface IDrawIdCardsToCanvas {
  id: string;
  name: string;
  width: number;
  valueToEncode: string;
  organization: string;
  ctx: CanvasRenderingContext2D;
  cb: () => void;
}

const drawIdCardToCanvas = async ({
  name,
  id,
  width,
  valueToEncode,
  organization,
  ctx,
  cb,
}: IDrawIdCardsToCanvas): Promise<void> => {
  const height = 0.8336 * width;
  const logoHeight = height * 0.05;
  const logoWidth = logoHeight * 0.93;
  const logoFontSize = height * 0.04;
  const labelFontSize = height * 0.03;

  // side A
  const idLabelTextY = height * 0.51;
  const idTextY = height * 0.55;
  const nameFontSize = height * 0.051;
  const nameY = height * 0.28;
  const orgLabelTextY = height * 0.4;
  const orgTextY = height * 0.44;
  const sideACenterLine = width * 0.24;
  const sideALeftBorder = width * 0.035;
  const sideALogoTextX = width * 0.115;
  const sideALogoTextY = height * 0.088;
  const sideALogoX = width * 0.055;
  const sideALogoY = height * 0.05;
  const sideAQrBgBorderRadius = width * 0.02;
  const sideAQrBgSize = height * 0.3;
  const sideAQrSize = sideAQrBgSize * 0.92;
  const sideAQrBgX = height * 0.133;
  const sideAQrBgY = height * 0.65;
  const sideAQrLogoSize = sideAQrSize * 0.31;
  const sideAQrX = sideAQrBgX + sideAQrBgSize * 0.04;
  const sideAQrY = sideAQrBgY + sideAQrBgSize * 0.04;
  const sideATextMaxWidth = width * 0.405;
  const sideATextMaxLineHeight = height * 0.04;
  const sideAQrLogoX = sideAQrX + sideAQrSize * 0.35;
  const sideAQrLogoY = sideAQrY + sideAQrSize * 0.35;

  // side B
  const sideBLogoTextX = width * 0.645;
  const sideBLogoTextY = height * 0.088;
  const sideBLogoX = width * 0.58;
  const sideBLogoY = height * 0.05;
  const sideBQrBgBorderRadius = width * 0.05;
  const sideBQrBgSize = width * 0.41;
  const sideBQrBgX = width * 0.556;
  const sideBQrBgY = height * 0.27;
  const sideBQrSize = sideBQrBgSize * 0.92;
  const sideBQrX = sideBQrBgX + sideBQrSize * 0.042;
  const sideBQrY = sideBQrBgY + sideBQrSize * 0.042;
  const sideBQrLogoSize = sideBQrSize * 0.31;
  const sideBQrLogoX = sideBQrX + sideBQrSize * 0.35;
  const sideBQrLogoY = sideBQrY + sideBQrSize * 0.35;

  const idLabelText = 'ID';
  const logoText = 'Safer Management';
  const orgLabelText = 'Organization';

  const options: QRCodeToDataURLOptions = {
    errorCorrectionLevel: 'Q',
    type: 'image/png',
    width,
    color: {
      light: Theme.primaryWhite,
      dark: Theme.primaryBlueDark,
    },
  };

  const drawBg = (
    resolve: (success: boolean) => void,
    reject: (success: boolean) => void,
  ) => {
    const doubleBg = new Image();
    doubleBg.onerror = () => reject(false);
    doubleBg.src = idDoubleBackground;
    doubleBg.onload = () => {
      ctx.drawImage(doubleBg, 0, 0, width, height);
      resolve(true);
    };
  };

  const drawSideALogo = (
    resolve: (success: boolean) => void,
    reject: (success: boolean) => void,
  ) => {
    const sideALogo = new Image();
    sideALogo.onerror = () => reject(false);
    sideALogo.src = saferWhiteLogo;
    sideALogo.onload = async () => {
      ctx.drawImage(sideALogo, sideALogoX, sideALogoY, logoWidth, logoHeight);
      resolve(true);
    };
  };

  const drawText = () => {
    // logo text
    ctx.font = `${logoFontSize}px ${Theme.fontBold}`;
    ctx.fillStyle = Theme.primaryWhite;
    ctx.fillText(logoText, sideALogoTextX, sideALogoTextY);

    // name
    ctx.font = `${nameFontSize}px ${Theme.fontBold}`;
    const nameWidth = ctx.measureText(name).width;
    ctx.fillStyle = Theme.primaryWhite;
    ctx.fillText(name, sideACenterLine - nameWidth / 2, nameY);

    // id label
    ctx.font = `600 ${labelFontSize}px ${Theme.font}`;
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = Theme.primaryWhite;
    ctx.fillText(idLabelText, sideALeftBorder, idLabelTextY);
    ctx.globalAlpha = 1;

    // id text
    ctx.font = `800 ${labelFontSize}px ${Theme.font}`;
    ctx.fillStyle = Theme.primaryWhite;
    wrapText({
      ctx,
      text: id,
      x: sideALeftBorder,
      y: idTextY,
      maxWidth: sideATextMaxWidth,
      lineHeight: sideATextMaxLineHeight,
    });

    // org label
    ctx.font = `600 ${labelFontSize}px ${Theme.font}`;
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = Theme.primaryWhite;
    ctx.fillText(orgLabelText, sideALeftBorder, orgLabelTextY);
    ctx.globalAlpha = 1;

    // org text
    ctx.font = `800 ${labelFontSize}px ${Theme.font}`;
    ctx.fillStyle = Theme.primaryWhite;
    ctx.fillText(organization, sideALeftBorder, orgTextY);

    ctx.font = `${logoFontSize}px ${Theme.fontBold}`;
    ctx.fillStyle = Theme.primaryWhite;
    ctx.fillText(logoText, sideBLogoTextX, sideBLogoTextY);
  };

  const drawSideAQrBackground = () => {
    roundRect({
      ctx,
      x: sideAQrBgX,
      y: sideAQrBgY,
      width: sideAQrBgSize,
      height: sideAQrBgSize,
      radius: {
        tl: sideAQrBgBorderRadius,
        tr: sideAQrBgBorderRadius,
        bl: sideAQrBgBorderRadius,
        br: sideAQrBgBorderRadius,
      },
      fill: true,
      stroke: false,
    });
  };

  const drawSideAQrCode = async (qrUrl: string) => {
    await new Promise(
      (
        resolve: (success: boolean) => void,
        reject: (success: boolean) => void,
      ) => {
        const sideAQrCode = new Image();
        sideAQrCode.src = qrUrl;
        sideAQrCode.onerror = () => reject(false);
        sideAQrCode.onload = () => {
          ctx.drawImage(
            sideAQrCode,
            sideAQrX,
            sideAQrY,
            sideAQrSize,
            sideAQrSize,
          );
          resolve(true);
        };
      },
    );
  };

  const drawSideAQrLogo = (
    resolve: (success: boolean) => void,
    reject: (success: boolean) => void,
  ) => {
    const sideAQrLogo = new Image();
    sideAQrLogo.src = saferQrLogo;
    sideAQrLogo.onerror = () => reject(false);
    sideAQrLogo.onload = () => {
      ctx.drawImage(
        sideAQrLogo,
        sideAQrLogoX,
        sideAQrLogoY,
        sideAQrLogoSize,
        sideAQrLogoSize,
      );
      resolve(true);
    };
  };

  const drawSideBLogo = (
    resolve: (success: boolean) => void,
    reject: (success: boolean) => void,
  ) => {
    const sideBLogo = new Image();
    sideBLogo.src = saferWhiteLogo;
    sideBLogo.onerror = () => reject(false);
    sideBLogo.onload = () => {
      ctx.drawImage(sideBLogo, sideBLogoX, sideBLogoY, logoWidth, logoHeight);
      resolve(true);
    };
  };

  const drawSideBQrBg = () => {
    roundRect({
      ctx,
      x: sideBQrBgX,
      y: sideBQrBgY,
      width: sideBQrBgSize,
      height: sideBQrBgSize,
      radius: {
        tl: sideBQrBgBorderRadius,
        tr: sideBQrBgBorderRadius,
        bl: sideBQrBgBorderRadius,
        br: sideBQrBgBorderRadius,
      },
      fill: true,
      stroke: false,
    });
  };

  const drawSideBQrCode = async (qrUrl: string) => {
    await new Promise(
      (
        resolve: (success: boolean) => void,
        reject: (success: boolean) => void,
      ) => {
        const sideBQrCode = new Image();
        sideBQrCode.src = qrUrl;
        sideBQrCode.onerror = () => reject(false);
        sideBQrCode.onload = () => {
          ctx.drawImage(
            sideBQrCode,
            sideBQrX,
            sideBQrY,
            sideBQrSize,
            sideBQrSize,
          );
          resolve(true);
        };
      },
    );
  };

  const drawSideBQrLogo = (
    resolve: (success: boolean) => void,
    reject: (success: boolean) => void,
  ) => {
    const sideBQrLogo = new Image();
    sideBQrLogo.src = saferQrLogo;
    sideBQrLogo.onerror = () => reject(false);
    sideBQrLogo.onload = () => {
      ctx.drawImage(
        sideBQrLogo,
        sideBQrLogoX,
        sideBQrLogoY,
        sideBQrLogoSize,
        sideBQrLogoSize,
      );
      resolve(true);
    };
  };

  await QRCode.toDataURL(valueToEncode, options).then(async (qrUrl) => {
    try {
      await new Promise(drawBg);
      await new Promise(drawSideALogo);
      drawText();
      drawSideAQrBackground();
      await drawSideAQrCode(qrUrl);
      await new Promise(drawSideAQrLogo);
      await new Promise(drawSideBLogo);
      drawSideBQrBg();
      await drawSideBQrCode(qrUrl);
      await new Promise(drawSideBQrLogo);

      cb();
    } catch (err) {
      return;
    }
  });
};

export default drawIdCardToCanvas;
