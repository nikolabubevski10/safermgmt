import React from 'react';
import { Button } from './CustomButtonStyles';
interface Props {
  onClickHandle?: () => void;
  title: string;
  // eslint-disable-next-line
  buttonType?: any;
}

const CustomButton: React.FC<Props> = (props: Props) => {
  const { onClickHandle, title, buttonType } = props;
  return (
    <div>
      <Button type={buttonType} onClick={onClickHandle}>
        {title}
      </Button>
    </div>
  );
};

export default CustomButton;
