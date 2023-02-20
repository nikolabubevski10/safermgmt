import React, { useState } from 'react';
import {
  TempPopup,
  FieldIcon,
  PopupContent,
  PopupLine,
} from './CustomPopupStyles';
interface Props {
  currentValue: string;
  setCurrentValue: (id: string) => void;
  selectvalues: string[];
}

const CustomPopup: React.FC<Props> = (props: Props) => {
  const { setCurrentValue, selectvalues } = props;
  const [show, setShow] = useState(false);

  return (
    <TempPopup>
      <FieldIcon onClick={() => setShow(!show)}>
        <i className="fas fa-ellipsis-v"></i>
      </FieldIcon>

      {show ? (
        <PopupContent>
          {selectvalues.map((selectVal, i) => (
            <PopupLine
              key={i}
              id={selectVal}
              onClick={(e) => setCurrentValue(e.currentTarget.id)}
            >
              &deg;{selectVal}
            </PopupLine>
          ))}
        </PopupContent>
      ) : null}
    </TempPopup>
  );
};

export default CustomPopup;
