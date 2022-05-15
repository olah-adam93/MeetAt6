import {useCallback, useEffect, useState, useContext} from 'react';

/* Style */
import './Style/SearchEventView.css';

/* Components */
import SearchBar from '../components/SearchEvent/SearchBar';
import FilterBar from '../components/SearchEvent/FilterBar';
import DisplayItems from '../components/SearchEvent/DisplayItems';

/* Database Context */
import {EventDbContext} from '../components/EventDbContext/EventDbContext';

const SearchEventView = () => {
  const eventDb = useContext(EventDbContext);
  const [eventsCard, setEventsCard] = useState([]);

  // Search parameters
  const [searchQuery, setSearchQuery] = useState("");
  /* const [searchParam] = useState(["capital", "name"]); */
  
  const searchFunction = useCallback((eventDb) => {
    return eventDb.filter((event) => {
        const value = event[1];
        return value?.title.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }, [searchQuery])

  useEffect(() => {
    console.log('eventdb: ', eventDb.db);

    setEventsCard(searchFunction(eventDb.db));

  }, [eventDb, searchFunction]);


  return (
    <div className='search-event-container'>
      <SearchBar setSearchQuery={setSearchQuery}/>

      <FilterBar />

      <DisplayItems filteredDbItems={eventsCard} perPage={3} />
    </div>
  );
};

export default SearchEventView;
