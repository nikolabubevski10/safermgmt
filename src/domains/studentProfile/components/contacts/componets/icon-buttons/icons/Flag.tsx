import React from 'react';
import { Svg } from './flagIconStyles';
interface Props {
  isActive: boolean;
}

const Flag: React.FC<Props> = (props: Props) => {
  const { isActive } = props;
  return (
    <Svg
      width="13"
      isActive={isActive}
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9097 6.14945C12.043 5.71731 11.2413 5.16572 10.5279 4.51082C10.4679 4.45592 10.4444 4.37166 10.4674 4.29368C10.8209 2.9564 11.0834 1.59672 11.2532 0.223965C11.28 -0.00436852 11.1569 -0.0715255 11.0271 0.0851741C9.72616 1.641 7.94014 1.46247 6.15434 1.28395C4.70865 1.13944 3.2631 0.994934 2.07517 1.77061L3.89681 8.32852C5.08714 7.54654 6.53627 7.69139 7.98539 7.83623C9.77109 8.01472 11.5568 8.19321 12.8582 6.63746C12.988 6.48076 13.0127 6.19422 12.9097 6.14945ZM3.52472 12.9171L3.28569 12.9839C3.05576 13.0481 2.81729 12.9138 2.75304 12.6839L0.0200679 2.90387C-0.0602357 2.61644 0.107669 2.31834 0.395095 2.23803L0.425965 2.22941C0.563983 2.19084 0.711671 2.20868 0.836537 2.279C0.961403 2.34933 1.05322 2.46637 1.09178 2.60439L3.82469 12.3844C3.88894 12.6143 3.75464 12.8528 3.52472 12.9171Z"
      />
    </Svg>
  );
};

export default Flag;