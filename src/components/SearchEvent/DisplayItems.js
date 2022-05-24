import { useEffect, useState } from 'react';

/* Style */
import './Style/DisplayItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleLeft,
  faAnglesRight,
  faAnglesLeft,
} from '@fortawesome/free-solid-svg-icons';

/* Components */
import EventCard from '../HomePage/EventCard';

const DisplayItems = ({
  isDeleteButton,
  filteredDbItems,
  perPage,
  toDefault,
  setToDefault,
}) => {
  // console.log('DISPLAY ITEMS RENDER');
  const itemsPerPage = perPage;
  const [currentPage, setCurrentPage] = useState(1);
  const [fromIndex, setfromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(itemsPerPage);
  const totalItems = filteredDbItems.length;
  const pageNumber = Math.ceil(totalItems / itemsPerPage);
  const [itemsToRender, setItemsToRender] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (toDefault) {
      setCurrentPage(1);
      setfromIndex(0);
      setToIndex(itemsPerPage);
    }
  }, [toDefault, itemsPerPage]);
  const deleteModalHandler = (e) => {
    setModalOpen(!modalOpen);
  };
  const cancelHandler = () => {
    setModalOpen(false);
  };
  const deleteHandler = (event) => {
    console.log(event.target.parentElement);
  };

  const nextButtonHandler = () => {
    setCurrentPage(currentPage + 1);
    setfromIndex(fromIndex + itemsPerPage);
    setToIndex(toIndex + itemsPerPage);

    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    console.log('next page');
  };

  const previousButtonHandler = () => {
    setCurrentPage(currentPage - 1);
    setfromIndex(fromIndex - itemsPerPage);
    setToIndex(toIndex - itemsPerPage);

    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    console.log('previous page');
  };

  const toFirstPageHandler = () => {
    setCurrentPage(1);
    setfromIndex(0);
    setToIndex(itemsPerPage);

    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    console.log('to first page');
  };

  const toLastPageHandler = () => {
    setCurrentPage(pageNumber);
    setfromIndex(totalItems - itemsPerPage);
    setToIndex(totalItems);

    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    console.log('to last page');
  };

  useEffect(() => {
    // setLoading(true);
    setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));

    // setTimeout(() => {
    //   setItemsToRender(filteredDbItems.slice(fromIndex, toIndex));
    //   setLoading(false);
    // }, 500);

    setToDefault(false);
  }, [filteredDbItems, fromIndex, toIndex, setToDefault]);

  return (
    <div className='display-items-container'>
      <div className='display-container'>
        {modalOpen && (
          <div>
            <h2>Are you sure?</h2>
            <button onClick={cancelHandler}>Cancel</button>
            <button
              onClick={(eventObj) => {
                deleteHandler(eventObj);
              }}
            >
              Delete
            </button>
          </div>
        )}
        {!loading ? (
          itemsToRender.map((eventObj, index) => {
            return (
              <div key={index} className='display-items'>
                <EventCard
                  eventCard={eventObj[1]}
                  eventId={eventObj[0]}
                  key={`card_${eventObj[0]}`}
                />
                {isDeleteButton && (
                  <>
                    <button type='button' onClick={deleteModalHandler}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            );
          })
        ) : (
          <div> Loading... </div>
        )}
      </div>

      <div className='pagination-container'>
        {filteredDbItems.length > 0 ? (
          <>
            <button
              type='button'
              onClick={toFirstPageHandler}
              disabled={currentPage > 2 ? '' : 'disabled'}
            >
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>
            <button
              type='button'
              onClick={previousButtonHandler}
              disabled={currentPage === 1 ? 'disabled' : ''}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <span>{` Page ${currentPage} of ${pageNumber} `}</span>
            <button
              type='button'
              onClick={nextButtonHandler}
              disabled={currentPage === pageNumber ? 'disabled' : ''}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button
              type='button'
              onClick={toLastPageHandler}
              disabled={currentPage < pageNumber - 1 ? '' : 'disabled'}
            >
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </>
        ) : (
          <>
            <button type='button' onClick={toFirstPageHandler} disabled>
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>
            <button type='button' onClick={previousButtonHandler} disabled>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <span>{` Page ${currentPage} of ${1} `}</span>
            <button type='button' onClick={nextButtonHandler} disabled>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button type='button' onClick={toLastPageHandler} disabled>
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DisplayItems;
