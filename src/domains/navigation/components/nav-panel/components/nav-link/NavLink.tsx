import React, { useState, useEffect, createRef } from 'react';
import {
  Button,
  Container,
  Label,
  MainLinkContainer,
  SubLinkContainer,
} from './NavLinkStyles';
import { useHistory } from 'react-router-dom';
import Triangle from './components/triangle/Triangle';

interface Props {
  children?: JSX.Element[];
  currentPage: string;
  iconComponent: React.FC;
  label: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  to?: string;
}

const NavLink: React.FC<Props> = ({
  children,
  currentPage,
  iconComponent: Icon,
  label,
  setCurrentPage,
  to,
}: Props) => {
  const ref = createRef<HTMLDivElement>();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const isActive = currentPage === label;

  const childrenArray = children
    ? Array.isArray(children)
      ? children
      : [children]
    : [];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleIsOpen();
    const button = e.target as HTMLButtonElement;
    setCurrentPage(button.value);
    if (!to) return;
    history.push(to);
  };

  const toggleIsOpen = () => !!children && setIsOpen((prev) => !prev);

  useEffect(() => {
    if (!isActive) setIsOpen(false);
  }, [isActive]);

  useEffect(() => {
    const newHeight = ref && ref.current ? ref.current.scrollHeight : 0;
    setHeight(newHeight);
  }, []);

  const shouldShow = height > 0;

  return (
    <Container shouldShow={shouldShow}>
      <MainLinkContainer isActive={isActive}>
        <Button onClick={handleClick} value={label} />
        <Icon />
        <Label>{label}</Label>
        {!!children && <Triangle isActive={isActive} down={isOpen} />}
      </MainLinkContainer>
      <SubLinkContainer isOpen={isOpen} ref={ref} height={height}>
        {childrenArray.map((child: JSX.Element) => child)}
      </SubLinkContainer>
    </Container>
  );
};

export default NavLink;
