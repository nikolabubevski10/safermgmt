import React, { Fragment, useEffect, useState } from 'react';
import SearchIcon from '../../assets/search-icon';
import { IBusRoute } from '../../types';
import Result from './components/result/Result';
import {
  Container,
  Input,
  InputContainer,
  ResultsContainer,
} from './SearchDropDownStyles';

interface ISearchDropDownProps {
  Data: IBusRoute[];
  selectItem: (id: string) => void;
}

const SearchDropDown: React.FC<ISearchDropDownProps> = ({
  Data,
  selectItem,
}: ISearchDropDownProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const [busAttendanceData, setBusAttendanceData] = useState(Data);

  useEffect(() => {
    if (!searchText.length) {
      setBusAttendanceData(Data);
      return;
    }
    const filteredrecords = Data.filter((rec: IBusRoute) =>
      rec?.id?.toLowerCase().startsWith(searchText.toLowerCase()),
    );
    setBusAttendanceData(filteredrecords);
  }, [searchText]);

  const handleChangeSearchText: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setSearchText(e.target.value);
  };

  const handleSelectItem = (id: string) => {
    selectItem(id);
    setSearchText('');
  };

  return (
    <Container>
      <Fragment>
        <InputContainer>
          <SearchIcon />
          <Input
            value={searchText}
            placeholder="Specific record by bus number…"
            onChange={handleChangeSearchText}
          />
        </InputContainer>
        {searchText && (
          <ResultsContainer>
            {busAttendanceData.length ? (
              busAttendanceData.map((rec, index) => (
                <Result
                  searchText={searchText}
                  onClick={() => handleSelectItem(rec.id)}
                  data={rec}
                  key={index}
                >
                  result
                </Result>
              ))
            ) : (
              <div>no results</div>
            )}
          </ResultsContainer>
        )}
      </Fragment>
    </Container>
  );
};

export default SearchDropDown;
