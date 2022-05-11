import './Style/SearchEventView.css';

import SearchBar from '../components/SearchEvent/SearchBar';
import FilterBar from '../components/SearchEvent/FilterBar';
import DisplayItems from '../components/SearchEvent/DisplayItems';

import { db } from '../components/SearchEvent/db';

const SearchEventView = () => {


  return (
    <div className='search-event-container'>
      <SearchBar />
      <FilterBar />
      <DisplayItems database={db}/>
    </div>
  );
};

export default SearchEventView;
