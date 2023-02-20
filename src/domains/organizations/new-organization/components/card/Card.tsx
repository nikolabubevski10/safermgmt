import React from 'react';
import { Container, Lable } from './CardStyle';
interface Props {
  children: JSX.Element | number | string;
  isActive: boolean;
}
const Card: React.FC<Props> = (props: Props) => {
  const { children, isActive } = props;
  const Active = isActive ? 'active' : '';
  return (
    <Container className={Active}>
      <Lable>{children}</Lable>
      <input type="checkbox" checked={isActive} />
    </Container>
  );
};
export default Card;
