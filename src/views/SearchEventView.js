import './Style/SearchEventView.css';

import SearchBar from '../components/SearchEvent/SearchBar';
import FilterBar from '../components/SearchEvent/FilterBar';
import InfiniteScrollComponent from '../components/SearchEvent/InfiniteScrollComponent';
// import MapComponent from '../components/SearchEvent/MapComponent';

const SearchEventView = () => {
  

  return (
    <div className='search-event-container'>
      <SearchBar />
      <FilterBar />
      <InfiniteScrollComponent />
    </div>
  );
};

export default SearchEventView;
