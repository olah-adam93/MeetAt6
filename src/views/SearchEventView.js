import './Style/SearchEventView.css';

import SearchBar from '../components/SearchEvent/SearchBar';
import FilterBar from '../components/SearchEvent/FilterBar';
import DisplayItems from '../components/SearchEvent/DisplayItems';

import {testDb} from '../others/testDb';
import {useCallback, useEffect, useState} from 'react';

const SearchEventView = () => {
  // fetching data from server
  const [dbItems, setDbItems] = useState([]);
  const [filteredDbItems, setFilteredDbItems] = useState([]);

  // for search parameters
  const [searchQuery, setSearchQuery] = useState("");
  /* const [searchParam] = useState(["capital", "name"]); */
  
  const searchFunction = useCallback((items) => {
    return items.filter((item) => {
        return item.title.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }, [searchQuery])

  useEffect(() => {
    console.log('fetch data from server');
    setDbItems(testDb);
    setFilteredDbItems(searchFunction(dbItems));
  }, [dbItems, searchFunction]);


  return (
    <div className='search-event-container'>
      <SearchBar setSearchQuery={setSearchQuery}/>

      <FilterBar />

      <DisplayItems filteredDbItems={filteredDbItems}/>
    </div>
  );
};

export default SearchEventView;
