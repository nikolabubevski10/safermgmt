import React from 'react';
import {
  Container,
  Lable,
  ColerContainer,
  ColorCover,
  Overlay,
  ColorCardStyles,
} from './ColorCardStyles';
import { SketchPicker } from 'react-color';
import { IColorType } from '../survey-alert/SurveyAlert';
interface Props {
  children: JSX.Element | number | string;
  isActive: boolean;
  handleColorChange: (x: IColorType) => void;
  color: string;
  showColorPicker: boolean;
  handleColorPickerToggle: (x: unknown) => void;
  closeColorPicker: (x: unknown) => void;
}
const ColorCard: React.FC<Props> = (props: Props) => {
  const {
    children,
    isActive,
    color,
    handleColorChange,
    showColorPicker,
    handleColorPickerToggle,
    closeColorPicker,
  } = props;
  const Active = isActive ? 'active' : '';
  return (
    <>
      {showColorPicker && <Overlay onClick={closeColorPicker} />}
      <Container className={Active} onClick={handleColorPickerToggle}>
        <ColorCardStyles />
        <Lable>{children}</Lable>
        <ColerContainer>
          {showColorPicker ? (
            <SketchPicker
              disableAlpha={false}
              color={color}
              onChange={handleColorChange}
            />
          ) : null}
          <ColorCover color={color}></ColorCover>
        </ColerContainer>
      </Container>
    </>
  );
};
export default ColorCard;
