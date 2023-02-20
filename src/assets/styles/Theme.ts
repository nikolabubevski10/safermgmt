import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderNeutral: string;
    borderRadiusSmall: string;
    borderRadiusMedium: string;
    borderRadiusLarge: string;
    borderRadiusXL: string;
    borderRadiusXXL: string;
    borderRadiusXXXL: string;
    borderRadiusXXXXL: string;
    boxShadowLight: string;
    cardHeaderHeight: string;
    contactModalCloseButtonSize: string;
    filterIconSize: string;
    font: string;
    fontNormal: string;
    fontBold: string;
    fontSizeExtraSmall: string;
    fontSizeSmall: string;
    fontSizeMedium: string;
    fontSizeLarge: string;
    fontSizeExtraLarge: string;
    fontSizeXL: string;
    fontSizeXXL: string;
    fontSizeXXXL: string;
    footerButtonSpacing: string;
    homepageLeftMarginDesktop: string;
    homepageLeftMarginMobile: string;
    homepageLeftMarginTablet: string;
    homepageTextBlockMaxWidth: string;
    homepageTopMargin: string;
    inputIconSize: string;
    inputPadding: string;
    lineHeightSmall: string;
    lineHeightMedium: string;
    lineHeightModalHead: string;
    maxWidth: string;
    modalFormLinkFontSize: string;
    modalFormLinkLineHeight: string;
    modalSubheadingFontSize: string;
    modalSubheadingFontSizeMobile: string;
    modalSubheadingLineHeight: string;
    modalSubheadingLineHeightMobile: string;
    notificationBorderRadius: string;
    notificationIconSize: string;
    notificationTextFontSize: string;
    notificationTextFontSizeMobile: string;
    notificationTextLineHeight: string;
    notificationTextLineHeightMobile: string;
    pageSidePadding: string;
    pageSidePaddingTablet: string;
    pageSidePaddingMobile: string;
    pageTopMarginDesktop: string;
    pageTopMarginDesktopTablet: string;
    primaryBlueLight: string;
    primaryBlueDark: string;
    primaryYellow: string;
    primaryWhite: string;
    secondaryBlack: string;
    secondaryBlackTrans: string;
    secondaryBlackTransLight: string;
    secondaryFontDark: string;
    secondaryFontDarkTrans: string;
    secondaryGrayLight: string;
    secondaryGrayMedium: string;
    secondaryGrayDark: string;
    secondaryGrayDarkTrans: string;
    secondaryYellowLight: string;
    secondaryYellowLightTrans: string;
    secondaryYellowMedium: string;
    secondaryBlueLight: string;
    secondaryBlueMedium: string;
    secondaryBlueDark: string;
    secondaryRedLight: string;
    secondaryRedMedium: string;
    secondaryRed: string;
    secondaryRedTrans: string;
    secondaryGreenLight: string;
    secondaryGreenDark: string;
    secondaryGreenDarkTrans: string;
    mixBlendNormal: string;
    sizeRanges: {
      [x: string]: {
        min: number;
        max: number;
      };
    };
    surveyCardsRightMargin: string;
    surveyCardsMinHeight: string;
    weightBold: string;
    weightHeavy: string;
    weightMedium: string;
    weightRegular: string;
    weightSemibold: string;
    weightBoldX: string;
    weightFullBold: string;
    widthTablet: string;
    widthMobile: string;
    widthFull: string;
    heightFull: string;
    buttonWidthNormal: string;
    buttonHeightNormal: string;
    displayTypeFlex: string;
    alignItemCenter: string;
    alignItemStart: string;
    cursorPointer: string;
    fontStyleNormal: string;
    fontWeightNormal: string;
    lineHeight: string;
    positionRelative: string;
    positionAbsolute: string;
    positionFixed: string;
    selectPopupHoverBG: string;
    selectPopupHeight: string;
    selectPopupWidth: string;
    autoStyles: string;
    modalWidth: string;
    borderRadiusHalf: string;
    fontSizeBigH1: string;
    contentSpaceBetween: string;
    scrollBGblueDark: string;
    scrollTrackBGLightGray: string;
    modalIconFontSize: string;
    modalIconFontSizeNormal: string;
    modalLabelLineHeight: string;
    modalFormHeight: string;
    modalInputHeight: string;
    modalUserinfoFontSize: string;
    modalUserinfoLineHeight: string;
    maxHeightModalQuestions: string;
    fontSizeBigH2: string;
    alignItemEnd: string;
    font30: string;
    modalUserProfileSize: {
      height: string;
      width: string;
    };
    profileAreaCropAreaBefore: {
      height: string;
      width: string;
    };
    profileAreaCropAreaAfter: {
      height: string;
      width: string;
    };
    profileUploadButton: {
      height: string;
      width: string;
    };
    profileUploadButtonImage: {
      height: string;
      width: string;
    };
    boxSizingBorderBox: string;
    profileOrdNameLineHeight: string;
    flexColumn: string;
    lightGray: string;
    profileModalHeightNormal: string;
    profileModalContentWidthNormal: string;
    contentSpaceAround: string;
    lightOpacityGray: string;
    slightGrey: string;
    darkBrown: string;
    mediumPurple: string;
    graySlate: string;
    tableRowBorderGrayLight: string;
    slightGrayBackground: string;
    maroonDark: string;
    tableRowLineHeight: string;
    font20: string;
  }
}

export const Theme: DefaultTheme = {
  borderNeutral: '#DADAE5',
  borderRadiusSmall: '5px',
  borderRadiusMedium: '6px',
  borderRadiusLarge: '10px',
  borderRadiusXL: '15px',
  borderRadiusXXL: '20px',
  modalFormHeight: '152px',
  borderRadiusXXXL: '30px',
  borderRadiusXXXXL: '60px',
  borderRadiusHalf: '50%',
  boxShadowLight: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  cardHeaderHeight: '40px',
  contactModalCloseButtonSize: '21px',
  filterIconSize: '26px',
  font: `'GilroyLight', sans-serif`,
  fontBold: `'GilroyBold', sans-serif`,
  fontStyleNormal: 'normal',
  fontWeightNormal: 'normal',
  fontSizeExtraSmall: '10px',
  modalIconFontSize: '29px',
  modalUserinfoLineHeight: '28px',
  modalIconFontSizeNormal: '26px',
  fontSizeSmall: '12px',
  fontSizeBigH2: '35px',
  lineHeight: '22px',
  lineHeightModalHead: '50px',
  fontSizeMedium: '14px',
  fontSizeLarge: '16px',
  fontSizeExtraLarge: '18px',
  fontSizeBigH1: '40px',
  fontSizeXL: '20px',
  fontSizeXXL: '22px',
  fontSizeXXXL: '29px',
  font30: '30px',
  font20: '20px',
  footerButtonSpacing: '30px',
  homepageLeftMarginDesktop: '113px',
  homepageLeftMarginMobile: '20px',
  homepageLeftMarginTablet: '40px',
  homepageTextBlockMaxWidth: '470px',
  profileModalHeightNormal: '222px',
  homepageTopMargin: '30px',
  inputIconSize: '19px',
  modalInputHeight: '49px',
  modalUserinfoFontSize: '23px',
  inputPadding: '16px',
  lineHeightSmall: '1.2',
  lineHeightMedium: '1.5',
  profileOrdNameLineHeight: '40px',
  modalLabelLineHeight: '19px',
  maxWidth: '1600px',
  modalFormLinkFontSize: '18px',
  modalFormLinkLineHeight: '22px',
  modalSubheadingFontSize: '25px',
  modalSubheadingFontSizeMobile: '24px',
  modalSubheadingLineHeight: '36px',
  modalSubheadingLineHeightMobile: '34px',
  notificationBorderRadius: '10px',
  notificationIconSize: '17px',
  notificationTextFontSize: '14px',
  notificationTextFontSizeMobile: '13px',
  notificationTextLineHeight: '16px',
  notificationTextLineHeightMobile: '15px',
  pageSidePadding: '45px',
  pageSidePaddingTablet: '30px',
  pageSidePaddingMobile: '15px',
  pageTopMarginDesktop: '30px',
  pageTopMarginDesktopTablet: '20px',
  profileModalContentWidthNormal: '475px',
  primaryBlueLight: '#0071BC',
  primaryBlueDark: '#0C3F62',
  primaryYellow: '#FDD119',
  primaryWhite: '#FFFFFF',
  slightGrey: '#e6e6e6',
  lightOpacityGray: '#23394814',
  secondaryBlack: '#000000',
  secondaryBlackTrans: '#000000B3',
  secondaryBlackTransLight: '#00000026',
  secondaryFontDark: '#233948',
  secondaryFontDarkTrans: '#23394880',
  secondaryGrayLight: '#f1f5f6',
  maroonDark: '#C12727',
  secondaryGrayMedium: '#dee2e3',
  secondaryGrayDark: '#859198',
  secondaryGrayDarkTrans: '#23394880',
  secondaryYellowLight: '#FCC714',
  slightGrayBackground: '#F3F5F7',
  graySlate: '#dedede',
  secondaryYellowLightTrans: '#FCC71440',
  secondaryYellowMedium: '#F6C000',
  secondaryBlueLight: '#c1dcee',
  secondaryBlueMedium: '#0071BC80',
  secondaryBlueDark: '#053353',
  secondaryRedLight: '#FC473F14',
  secondaryRedMedium: '#ff665e',
  secondaryRed: '#FC473F',
  secondaryRedTrans: '#FC473F1A',
  mediumPurple: '#333299',
  darkBrown: '#19181A',
  secondaryGreenLight: '#00939114',
  secondaryGreenDark: '#009391',
  secondaryGreenDarkTrans: '#0093911A',
  selectPopupHoverBG: '#f1f5f659',
  scrollBGblueDark: '#002035',
  scrollTrackBGLightGray: '#ebebeb',
  lightGray: '#cccccc',
  mixBlendNormal: 'normal',
  displayTypeFlex: 'flex',
  flexColumn: 'column',
  alignItemCenter: 'center',
  alignItemStart: 'flex-start',
  alignItemEnd: 'flex-end',
  cursorPointer: 'pointer',
  positionRelative: 'relative',
  positionAbsolute: 'absolute',
  positionFixed: 'fixed',
  contentSpaceBetween: 'space-between',
  contentSpaceAround: 'space-around',
  autoStyles: 'auto',
  boxSizingBorderBox: 'border-box',
  modalUserProfileSize: {
    height: '130px',
    width: '130px',
  },
  profileAreaCropAreaBefore: {
    height: '327px',
    width: '317px',
  },
  profileAreaCropAreaAfter: {
    height: '125px',
    width: '217px',
  },
  profileUploadButton: {
    height: '40px',
    width: '40px',
  },
  profileUploadButtonImage: {
    height: '34px',
    width: '34px',
  },
  fontNormal: `'Gilroy', sans-serif`,
  maxHeightModalQuestions: '12vh',
  sizeRanges: {
    mobile: {
      min: 0,
      max: 370,
    },
    mobileLarge: {
      min: 370,
      max: 562,
    },
    tablet: {
      min: 562,
      max: 900,
    },
    tabletLarge: {
      min: 900,
      max: 1190,
    },
    desktop: {
      min: 1190,
      max: 1609,
    },
    desktopLarge: {
      min: 1609,
      max: Infinity,
    },
  },
  surveyCardsRightMargin: '51px',
  surveyCardsMinHeight: '201px',
  weightBold: '700',
  weightHeavy: '900',
  weightMedium: '500',
  weightRegular: '400',
  weightSemibold: '600',
  weightBoldX: '800',
  weightFullBold: '900',
  widthTablet: '1024px',
  widthMobile: '425px',
  widthFull: '100%',
  heightFull: '100%',
  buttonWidthNormal: '258px',
  buttonHeightNormal: '60px',
  selectPopupHeight: '94px',
  selectPopupWidth: '100px',
  modalWidth: '730px',
  tableRowBorderGrayLight: 'rgb(35, 57, 72, 0.1)',
  tableRowLineHeight: '19px',
};

export default Theme;
