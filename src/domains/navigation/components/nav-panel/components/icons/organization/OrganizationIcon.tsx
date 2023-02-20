import React from 'react';
import { Svg } from './OrganizationIconStyles';

const OrganizationIcon: React.FC = () => {
  return (
    <Svg viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.91805 5.2248H18.9889C20.0976 5.2248 20.9996 6.12677 20.9996 7.23543V17.9893C20.9996 19.098 20.0976 20 18.9889 20H2.01063C0.901969 20 0 19.098 0 17.9893V2.01065C0 0.901985 0.901969 1.52588e-05 2.01063 1.52588e-05H5.5539C5.78718 1.52588e-05 6.00361 0.121279 6.12546 0.320197L8.91805 5.2248ZM18.9889 2.61026V3.12838H10.206L8.76672 0.59963H16.9783C18.087 0.59963 18.9889 1.5016 18.9889 2.61026Z"
      />
    </Svg>
  );
};

export default OrganizationIcon;
