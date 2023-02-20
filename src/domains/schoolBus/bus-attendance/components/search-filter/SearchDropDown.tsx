import React, { Fragment, useEffect, useState } from 'react';
import SearchIcon from '../../assets/search-icon';
import { IBusAttendance } from '../../types';
import Result from './components/result/Result';
import {
  Container,
  Input,
  InputContainer,
  ResultsContainer,
} from './SearchDropDownStyles';

interface IBusAttendanceProps {
  Data: IBusAttendance[];
  setCurrentAttendanceId: (busAttendanceId: string) => void;
}

const SearchDropDown: React.FC<IBusAttendanceProps> = ({
  Data,
  setCurrentAttendanceId,
}: IBusAttendanceProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const [busAttendanceData, setBusAttendanceData] = useState(Data);

  useEffect(() => {
    if (!searchText.length) {
      setBusAttendanceData(Data);
      return;
    }
    const filteredrecords = Data.filter((rec: IBusAttendance) =>
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
    setCurrentAttendanceId(id);
    setSearchText('');
  };

  return (
    <Container>
      <Fragment>
        <InputContainer>
          <SearchIcon />
          <Input
            value={searchText}
            placeholder="Specific record by Student ID…"
            onChange={handleChangeSearchText}
          />
        </InputContainer>
        {searchText && (
          <ResultsContainer>
            {busAttendanceData.length ? (
              busAttendanceData.map((busAttendance, index) => (
                <Result
                  searchText={searchText}
                  onClick={() => handleSelectItem(busAttendance.id)}
                  data={busAttendance}
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
