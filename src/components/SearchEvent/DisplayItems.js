import './Style/DisplayItems.css';

import EventCard from '../HomePage/EventCard';
import {useEffect, useState} from 'react';


const DisplayItems = ({filteredDbItems, perPage}) => {
  console.log('displayitems render');
  const itemsPerPage = perPage;
  const [currentPage, setCurrentPage] = useState(1);
  const [fromIndex, setfromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(itemsPerPage);
  // const [totalItems, setTotalItems] = useState(0);
  // const [pageNumber, setPageNumber] = useState(0);
  const totalItems = filteredDbItems.length;
  const pageNumber = Math.ceil(totalItems / itemsPerPage);
  const [itemsToRender, setItemsToRender] = useState([]);

  const [loading, setLoading] = useState(false);


  const nextButtonHandler = () => {
    setCurrentPage(currentPage + 1);
    setfromIndex(fromIndex + itemsPerPage);
    setToIndex(toIndex + itemsPerPage);

    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    console.log("next page");
  };


  const previousButtonHandler = () => {
    setCurrentPage(currentPage - 1);
    setfromIndex(fromIndex - itemsPerPage);
    setToIndex(toIndex - itemsPerPage);

    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    console.log("previous page");
  }

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
      setLoading(false);
    }, 500);
    

    // console.log('fromIndex', fromIndex, 'toIndex', toIndex);
    // console.log('currentPage', currentPage);
  }, [filteredDbItems, fromIndex, toIndex])

  return (
    <div className='display-items-container'>
      <div className='display-container'>
        {!loading ? 
          itemsToRender.map((event, index) => {
            return (
              <div key={index} className='display-items'>
                <EventCard
                eventCard={event[1]}
                eventId={event[0]}
                key={`card_${event[0]}`}
              />
              </div>
            );
          }) : <div> Loading... </div>}
      </div>

      <div className='pagination-container'>
        <button onClick={ previousButtonHandler } disabled={currentPage === 1 ? 'disabled' : ''}>Previons</button>
        <span>{` Page ${currentPage} of ${pageNumber} `}</span>
        <button onClick={ nextButtonHandler } disabled={currentPage === pageNumber ? 'disabled' : ''}>Next</button>
      </div>
    </div>
  );
};

export default DisplayItems;
