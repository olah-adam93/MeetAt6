import {useCallback, useEffect, useState, useContext} from 'react';

/* Style */
import './Style/SearchEventView.css';

/* Components */
import FilterBar from '../components/SearchEvent/FilterBar';
import DisplayItems from '../components/SearchEvent/DisplayItems';
import MapComponent from '../components/SearchEvent/MapComponent';

/* Database Context */
import {EventDbContext} from '../components/EventDbContext/EventDbContext';

/* Google Maps */
import { Wrapper } from '@googlemaps/react-wrapper';

const SearchEventView = () => {
  const eventDb = useContext(EventDbContext);
  const [eventsCard, setEventsCard] = useState([]);
  const [toDefault, setToDefault] = useState(false);

  // Search parameters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterParams, setFilterParams] = useState({
    location: '', // locationType
    price: '', // panymentType
    date: '', // eventStarts
    type: '', // type
    category: '' // category
  });
  
  const searchFunction = useCallback((eventDb) => {
    return eventDb.filter((event) => {
        const value = event[1];

        if(value?.category === undefined) {
          console.log(event);
        }
        if(value?.type === undefined) {
          console.log(event);
        }

        // function getDate(filterParamDate, eventStartDate) {
        //   console.log(filterParamDate);

           
        //   const eventDate = value?.eventStarts;
        //   console.log(eventDate);
        //   // const todayDate = new Date().toISOString().slice(0, 10);
        //   const todayDate = new Date().getTime( );
        //   console.log('today: ', todayDate);
        //   // const todayDate = new Date(value?.eventStarts).getTime();
        //   console.log('event date: ', eventDate);
        // }
        // getDate(filterParams?.date, value?.eventStarts);

        const filterTitleResult = value?.title.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 || value?.location.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
        const filterLocationResult = value?.locationType.toString().toLowerCase().indexOf(filterParams?.location.toLowerCase()) > -1;
        const filterPriceResult = value?.paymentType.toString().toLowerCase().indexOf(filterParams?.price.toLowerCase()) > -1;
        const filterDateResult = value?.eventStarts.toString().toLowerCase().indexOf(filterParams?.date.toLowerCase()) > -1;
        const filterTypeResult = value?.type.toString().toLowerCase().indexOf(filterParams?.type.toLowerCase()) > -1;
        const filterCategoryResult = value?.category.toString().toLowerCase().indexOf(filterParams?.category.toLowerCase()) > -1;
        
        return filterTitleResult && filterLocationResult && filterPriceResult && filterDateResult&& filterTypeResult && filterCategoryResult;   
    });
  }, [searchQuery, filterParams])

  useEffect(() => { 
      setEventsCard(searchFunction(eventDb.db));
  }, [eventDb, searchFunction]);

  return (
    <div className='search-event-container'>
      <FilterBar setSearchQuery={setSearchQuery} filterParams={filterParams} setFilterParams={setFilterParams} setToDefault={setToDefault}/>

      <div className='search-event-inner-container'>
        <DisplayItems filteredDbItems={eventsCard} perPage={6} toDefault={toDefault} setToDefault={setToDefault}/>
        <div className='display-maps-container'>
          <div className='display-maps'>
          <Wrapper apiKey={'AIzaSyD9MpMtp9BcSlZgMy26wtaaamLbfOQhu8s'}>
            <MapComponent eventInfo={eventsCard} />
          </Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEventView;
