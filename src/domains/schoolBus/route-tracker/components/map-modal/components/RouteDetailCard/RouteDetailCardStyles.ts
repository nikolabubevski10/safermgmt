import styled from 'styled-components';
import CheckImg from './assets/check.png';
import FlagImg from './assets/flag.png';
import ExclamationImg from './assets/exclamation.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;

export const CardTop = styled.div`
  display: flex;
`;

export const Heading = styled.div`
  color: ${({ theme }) => theme.secondaryFontDarkTrans};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightSemibold};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;

export const Address = styled.span`
  color: ${({ theme }) => theme.secondaryFontDark};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: ${({ theme }) => theme.weightRegular};
  line-height: ${({ theme }) => theme.lineHeightSmall};
`;

const Icon = styled.div`
  width: 26px;
  height: 26px;
  background-repeat: no-repeat !important;
`;

export const IcoCheck = styled(Icon)`
  background: url(${CheckImg});
`;

export const IcoFlag = styled(Icon)`
  background: url(${FlagImg});
`;

export const IcoExclamation = styled(Icon)`
  background: url(${ExclamationImg});
`;
