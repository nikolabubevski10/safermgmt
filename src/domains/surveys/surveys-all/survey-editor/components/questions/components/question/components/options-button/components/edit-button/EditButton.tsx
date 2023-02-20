import React from 'react';
import { useTranslation } from 'react-i18next';
import { Svg, Container, Text } from './EditButtonStyles';

const editText = 'Edit';

interface Props {
  onClick: React.MouseEventHandler;
}

const EditButton: React.FC<Props> = ({ onClick }: Props) => {
  const { t } = useTranslation();
  const tEditText = t(editText);
  return (
    <Container onClick={onClick}>
      <Svg viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1839 0.376396C11.6817 -0.125797 10.8069 -0.125133 10.3053 0.376396L8.93163 1.75012L11.7495 4.56798L13.1232 3.19426C13.3743 2.94382 13.5125 2.61036 13.5125 2.25497C13.5125 1.90025 13.3743 1.56678 13.1232 1.31568L12.1839 0.376396ZM12.8368 13H6.4781C6.11141 13 5.81382 12.7024 5.81382 12.3357C5.81382 11.969 6.11141 11.6714 6.4781 11.6714H12.8368C13.2035 11.6714 13.5011 11.969 13.5011 12.3357C13.5011 12.7024 13.2035 13 12.8368 13ZM1.32132 9.36043L8.16735 2.5144L10.9852 5.33292L4.13918 12.179C4.09534 12.2228 4.0402 12.2534 3.98042 12.2673L0.908136 12.9914C0.882894 12.9973 0.856987 13 0.831744 13C0.744724 13 0.659697 12.9655 0.597255 12.9024C0.516213 12.8213 0.482335 12.7031 0.508906 12.5915L1.23297 9.51919C1.24692 9.45874 1.27747 9.40361 1.32132 9.36043Z"
        />
      </Svg>
      <Text>{tEditText}</Text>
    </Container>
  );
};

export default EditButton;
