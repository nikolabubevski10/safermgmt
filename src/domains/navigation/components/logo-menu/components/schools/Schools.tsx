import React, { createRef, useEffect } from 'react';
import {
  Container,
  RestContainer,
  School,
  SelectedSchool,
  SelectedSchoolContainer,
} from './SchoolsStyles';
import Triangle from './components/triangle/Triangle';
import { ISchool } from '../../../../state/types';

interface Props {
  currentSchoolId: string | null;
  handleSchoolClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  schools: ISchool[];
  setBottomClip: React.Dispatch<React.SetStateAction<number>>;
  toggleMenu: () => void;
}

const Schools: React.FC<Props> = ({
  currentSchoolId,
  handleSchoolClick,
  isOpen,
  schools,
  setBottomClip,
  toggleMenu,
}: Props) => {
  const restRef = createRef<HTMLDivElement>();
  const selectedSchoolRef = createRef<HTMLButtonElement>();
  const containerRef = createRef<HTMLDivElement>();

  const selectedSchool = schools.find(
    (school) => school.id === currentSchoolId,
  );
  const rest = schools.filter((school) => school.id !== currentSchoolId);

  const restAlphabetized = [...rest].sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  useEffect(() => {
    if (!restRef || !restRef.current) return;
    if (!selectedSchoolRef || !selectedSchoolRef.current) return;
    if (!containerRef || !containerRef.current) return;
    const restHeight = restRef.current.clientHeight;
    const selectedSchoolHeight = selectedSchoolRef.current.clientHeight;
    const containerHeight = containerRef.current.clientHeight;
    const contentHeight = restHeight + selectedSchoolHeight;
    const pxToBottom = containerHeight - contentHeight;
    setBottomClip(pxToBottom);
  });

  const isSingleSchool = schools.length === 1;
  const selectedSchoolName = selectedSchool ? selectedSchool.name : '';

  return (
    <Container ref={containerRef}>
      <SelectedSchoolContainer>
        <SelectedSchool ref={selectedSchoolRef} onClick={toggleMenu}>
          {selectedSchoolName}
        </SelectedSchool>
        {!isSingleSchool && (
          <Triangle onClick={toggleMenu} isActive={isOpen} down={isOpen} />
        )}
      </SelectedSchoolContainer>
      <RestContainer ref={restRef} isOpen={isOpen}>
        {restAlphabetized.map((school, i) => (
          <School value={school.id} key={i} onClick={handleSchoolClick}>
            {school.name}
          </School>
        ))}
      </RestContainer>
    </Container>
  );
};

export default Schools;
