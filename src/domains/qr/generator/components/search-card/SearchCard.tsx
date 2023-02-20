import React from 'react';
import { Inner } from './SearchCardStyles';
import { Card } from '../shared/sharedStyles';
import SearchBar from './components/search-bar/SearchBar';
import Results from './components/results/Results';
import DownloadButton from './components/download-button/DownloadButton';

const SearchCard: React.FC = () => {
  return (
    <Card>
      <Inner>
        <SearchBar />
        <Results />
        <DownloadButton />
      </Inner>
    </Card>
  );
};

export default SearchCard;
