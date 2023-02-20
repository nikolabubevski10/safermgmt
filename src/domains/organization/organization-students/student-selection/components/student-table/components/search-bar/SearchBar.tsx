import React from 'react';
import { Container, Input, InputContainer } from './SearchBarStyles';
import {
  handleSearchInputChange,
  clearSearchText,
} from '../../../../../state/OrgStudentsActions';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../state/hooks';
import Spinner from './components/spinner/Spinner';
import SearchIcon from './components/search-icon/SearchIcon';
import ClearButton from './components/clear-button/ClearButton';

interface Props {
  setFilter: (filter: string) => void;
}

const SearchBar: React.FC<Props> = ({ setFilter }: Props) => {
  const dispatch = useAppDispatch();

  const { searchText, isLoading } = useAppSelector(
    ({ orgStudents }) => orgStudents,
  );

  const clearSearch = () => {
    dispatch(clearSearchText());
    setFilter('');
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(handleSearchInputChange(e));
    setFilter(e.target.value);
  };

  const hasText = searchText.length > 0;

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <InputContainer>
          {hasText ? <ClearButton onClick={clearSearch} /> : <SearchIcon />}
          <Input value={searchText} onChange={onChange} hasText={hasText} />
        </InputContainer>
      )}
    </Container>
  );
};

export default SearchBar;
