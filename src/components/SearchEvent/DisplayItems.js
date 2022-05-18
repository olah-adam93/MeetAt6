import {useEffect, useState} from 'react';

/* Style */
import './Style/DisplayItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft, faAnglesRight, faAnglesLeft} from '@fortawesome/free-solid-svg-icons';

/* Components */
import EventCard from '../HomePage/EventCard';

const DisplayItems = ({filteredDbItems, perPage, toDefault, setToDefault}) => {
  // console.log('DISPLAY ITEMS RENDER');
  const itemsPerPage = perPage;
  const [currentPage, setCurrentPage] = useState(1);
  const [fromIndex, setfromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(itemsPerPage);
  const totalItems = filteredDbItems.length;
  const pageNumber = Math.ceil(totalItems / itemsPerPage);
  const [itemsToRender, setItemsToRender] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(toDefault) {
      setCurrentPage(1);
      setfromIndex(0);
      setToIndex(itemsPerPage);
    }
  }, [toDefault, itemsPerPage])


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

  const toFirstPageHandler = () => {
    setCurrentPage(1);
    setfromIndex(0);
    setToIndex(itemsPerPage);

    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    console.log("to first page");
  }

  const toLastPageHandler = () => {
    setCurrentPage(pageNumber);
    setfromIndex(totalItems - itemsPerPage);
    setToIndex(totalItems);

    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    console.log("to last page");
  }

  useEffect(() => {
    // setLoading(true);
    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    
    // setTimeout(() => {
    //   setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    //   setLoading(false);
    // }, 500);
    
    setToDefault(false);

  }, [filteredDbItems, fromIndex, toIndex, setToDefault])

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
        <button type='button' onClick={ toFirstPageHandler } disabled={currentPage > 2 ? '' : 'disabled'}><FontAwesomeIcon icon={faAnglesLeft} /></button>
        <button type='button' onClick={ previousButtonHandler } disabled={currentPage === 1 ? 'disabled' : ''}><FontAwesomeIcon icon={faAngleLeft} /></button>
        <span>{` Page ${currentPage} of ${pageNumber} `}</span>
        <button type='button' onClick={ nextButtonHandler } disabled={currentPage === pageNumber ? 'disabled' : ''}><FontAwesomeIcon icon={faAngleRight} /></button>
        <button type='button' onClick={ toLastPageHandler } disabled={currentPage < (pageNumber - 1) ? '' : 'disabled'}><FontAwesomeIcon icon={faAnglesRight} /></button>
      </div>
    </div>
  );
};

export default DisplayItems;
