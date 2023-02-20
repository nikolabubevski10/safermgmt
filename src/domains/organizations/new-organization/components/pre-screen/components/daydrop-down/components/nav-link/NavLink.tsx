import React, { useState, useEffect, createRef } from 'react';
import {
  Button,
  ChildContainer,
  Container,
  Label,
  MainLinkContainer,
  SubLinkContainer,
} from './NavLinkStyles';
import { useHistory } from 'react-router-dom';
import Triangle from '../triangle/Triangle';

interface Props {
  children?: React.ReactElement[];
  currentPage?: string;
  iconComponent?: React.FC;
  label: string;
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
  to?: string;
}

const NavLink: React.FC<Props> = ({
  children,
  currentPage,
  label,
  to,
  isOpen,
  setIsOpen,
}: Props) => {
  const ref = createRef<HTMLDivElement>();
  const history = useHistory();
  const [height, setHeight] = useState<number>(0);
  const isActive = currentPage === label;
  const childrenArray = children
    ? Array.isArray(children)
      ? children
      : [children]
    : [];
  const handleClick = () => {
    toggleIsOpen();
    if (!to) return;
    history.push(to);
  };
  const toggleIsOpen = () => !!children && setIsOpen(!isOpen);
  useEffect(() => {
    if (!isActive) setIsOpen(false);
  }, [isActive]);
  useEffect(() => {
    const newHeight = ref ? (ref.current ? ref.current.scrollHeight : 0) : 0;
    setHeight(newHeight);
  }, []);
  return (
    <Container>
      <SubLinkContainer isOpen={isOpen} ref={ref} height={height}>
        {childrenArray.map((child, i) => {
          return <ChildContainer key={i}>{child}</ChildContainer>;
        })}
      </SubLinkContainer>
      <MainLinkContainer isActive={isActive}>
        <Button onClick={handleClick} value={label} />
        <Label>{label}</Label>
        {!!children && <Triangle isActive={isActive} up={isOpen} />}
      </MainLinkContainer>
    </Container>
  );
};

export default NavLink;
