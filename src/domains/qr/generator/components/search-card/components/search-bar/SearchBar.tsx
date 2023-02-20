import React, { Fragment } from 'react';
import {
  Container,
  Input,
  InputContainer,
  ResultsContainer,
} from './SearchBarStyles';
import {
  handleSearchInputChange,
  selectSearchResult,
  clearSearchText,
} from '../../../../state/GeneratorActions';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../state/hooks';
import ClearButton from './components/clear-button/ClearButton';
import filterPersonsByText from '../../utils/filterPersonsByText';
import Result from './components/result/Result';
import SearchIcon from './components/search-icon/SearchIcon';
import Spinner from './components/spinner/Spinner';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    searchText,
    persons,
    isShowingResults,
    isLoading: generatorIsLoading,
  } = useAppSelector(({ generator }) => generator);

  const { isLoading: navigationIsLoading } = useAppSelector(
    ({ navigation }) => navigation,
  );

  const handleResultClick = (id: string) => dispatch(selectSearchResult(id));

  const clearSearch = () => dispatch(clearSearchText());

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    dispatch(handleSearchInputChange(e));

  const personsFilteredBySearchText = persons
    ? filterPersonsByText(persons, searchText)
    : [];

  const hasText = searchText.length > 0;

  const isLoading = navigationIsLoading || generatorIsLoading;

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <InputContainer>
            {hasText ? <ClearButton onClick={clearSearch} /> : <SearchIcon />}
            <Input value={searchText} onChange={onChange} hasText={hasText} />
          </InputContainer>
          <ResultsContainer shouldShow={isShowingResults}>
            {personsFilteredBySearchText.length > 0 ? (
              personsFilteredBySearchText.map((person, i) => (
                <Result
                  searchText={searchText}
                  onClick={handleResultClick}
                  person={person}
                  key={i}
                >
                  result
                </Result>
              ))
            ) : (
              <div>no results</div>
            )}
          </ResultsContainer>
        </Fragment>
      )}
    </Container>
  );
};

export default SearchBar;
