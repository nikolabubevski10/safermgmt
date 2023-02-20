import styled, { createGlobalStyle } from 'styled-components';
import convert from 'color-convert';

const getArrowSvg = (left = false, hexColor = 'black') => {
  const transform = left ? 'matrix(-1, 0, 0, -1, 30.5, 31.5)' : '';

  const c = convert.hex.rgb(hexColor);
  const rgbString = `rgb(${c[0]},${c[1]},${c[2]})`;

  return `<svg 
    fill="none" 
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:bx="https://boxy-svg.com">
    <path
        d="M13 10L19 16L13 22"
        stroke-width="2.0"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="${rgbString}"
        transform="${transform}"
    />
    </svg>`;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const InnerTop = styled.div`
  display: flex;
`;

export const InnerBottom = styled.div`
  display: flex;
`;

export const Menu = styled.div``;

export const Calendar = styled.div``;

export const DateInputSpan = styled.span`
  color: ${({ theme }) => theme.primaryBlueDark} !important;
  font-size: 16px !important;
  line-height: 172.96% !important;
  -webkit-flex: auto !important;
  -ms-flex: auto !important;
  flex: auto !important;
  font-weight: 500 !important;
  text-align: left !important;
  padding-left: 9px !important;
`;

export const DateDiv = styled.div`
  background: ${({ theme }) => theme.primaryWhite}; !important;
  border: 1px solid ${({ theme }) => theme.secondaryGrayMedium}; !important;
  cursor: pointer !important;
  padding: 5px 10px !important;
  width: 100% !important;
  border-radius: 4px !important;
  border-color: ${({ theme }) => theme.secondaryGrayMedium};
  display: flex !important;
  height: 50px !important;
  text-align: center !important;
  align-items: center !important;
`;

export const DateSelectDiv = styled.div`
  cursor: pointer !important;
  display: flex;
  align-items: center;
  svg {
    margin-left: 10px;
  }
`;

export const DateRange = styled.div`
  font-family: ${({ theme }) => theme.fontNormal};
  font-style: ${({ theme }) => theme.fontStyleNormal};
  font-weight: ${({ theme }) => theme.weightBold};
  font-size: ${({ theme }) => theme.fontSizeXXL};
  line-height: 26px;
  color: ${({ theme }) => theme.primaryBlueDark};
`;

export const DatePickerStyles = createGlobalStyle`

.daterangepicker {
  font-family: ${({ theme }) => theme.font};
  padding: 25px 10px 0px 10px;
  border: none;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
}

.daterangepicker .drp-buttons .btn.btn-primary {
  width: 81px;
  height: 40px;
  background: linear-gradient(
      224.33deg,
      ${({ theme }) => theme.secondaryYellowMedium},
      rgba(255, 255, 255, 2e-5) 71.65%
    ),
    ${({ theme }) => theme.primaryYellow};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
}

.daterangepicker:before {
  border: none;
}

.daterangepicker .ranges {
  padding-bottom: 10px;
}

.daterangepicker .ranges li.active {
  background-color: ${({ theme }) => theme.primaryBlueLight} !important;
  color: ${({ theme }) => theme.secondaryGrayLight};
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 13px !important;
  line-height: 16px;
}

.daterangepicker .calendar-table th,
.daterangepicker th.month {
  width: auto !important;
  font-family: ${({ theme }) => theme.font};
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 17px !important;
  text-align: center !important;
  color: ${({ theme }) => theme.secondaryBlack};
}

.daterangepicker td.active,
.daterangepicker td.active:hover {
  background:${({ theme }) => theme.primaryBlueLight};
}

.daterangepicker td.active.start-date {
  color: ${({ theme }) => theme.primaryWhite};
  background-color: ${({ theme }) => theme.primaryBlueLight};
  border-top-left-radius:  ${({ theme }) => theme.borderRadiusXL};
  border-bottom-left-radius:  ${({ theme }) => theme.borderRadiusXL};
  border-top-right-radius: 0px;
  border-bottom-right-radius:0px;
}

.daterangepicker td.active.end-date {
  color: ${({ theme }) => theme.primaryWhite};
  background-color: ${({ theme }) => theme.primaryBlueLight};
  border-top-right-radius:  ${({ theme }) => theme.borderRadiusXL};
  border-bottom-right-radius:  ${({ theme }) => theme.borderRadiusXL};
  border-top-left-radius: 0px;
  border-bottom-left-radius:0px;
}
.daterangepicker td.in-range {
  color: ${({ theme }) => theme.primaryBlueLight};
  background-color: ${({ theme }) => theme.secondaryGrayLight};
}

.daterangepicker .calendar-table th.next.available {
  border: 2px solid !important;
  border-radius: 50% !important;
  color: ${({ theme }) => theme.primaryYellow};
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 32px !important;
  width: 32px !important;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-size: 32px;
  background-position: 50% 50%;
  background-image: url('data:image/svg+xml,${({ theme }) =>
    getArrowSvg(false, theme.primaryYellow)}');
  span {
    display: none;
  }
}
`;

// for some reason the styles break when the styles below share
// the same createGlobalStyle as the styles above.
export const MoreDatePickerStyles = createGlobalStyle`
.daterangepicker .calendar-table th.prev.available {
  border: 2px solid !important;
  border-radius: 50% !important;
  color: ${({ theme }) => theme.primaryYellow};
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 32px !important;
  width: 32px !important;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-size: 32px;
  background-position: 50% 50%;
  background-image: url('data:image/svg+xml,${({ theme }) =>
    getArrowSvg(true, theme.primaryYellow)}');
  span {
    display: none;
  }
}
`;
