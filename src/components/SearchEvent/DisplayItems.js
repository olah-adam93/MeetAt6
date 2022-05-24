import { useEffect, useState, useContext } from 'react';

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
import { deleteData } from '../../services/crud';
import { AuthContext } from '../Authentication/AuthContext';
const DisplayItems = ({
  isUnsubscribeButton,
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
  const [unsubscribeModalOpen, setUnsubscribedModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deletedEvent, setDeletedEvent] = useState({});
  const [unsubscribedEvent, setUnsubscribedEvent] = useState({});
  const authCont = useContext(AuthContext);
  useEffect(() => {
    if (toDefault) {
      setCurrentPage(1);
      setfromIndex(0);
      setToIndex(itemsPerPage);
    }
  }, [toDefault, itemsPerPage]);
  const deleteModalHandler = (eventObj) => {
    return (e) => {
      setModalOpen(!modalOpen);
      setDeletedEvent(eventObj[0]);
    };
  };
  const unsubscribeModalHandler = (eventObj) => {
    return (e) => {
      setUnsubscribedModalOpen(!modalOpen);
      setUnsubscribedEvent(eventObj[0]);
    };
  };
  const cancelHandler = () => {
    setModalOpen(false);
    setUnsubscribedModalOpen(false);
  };
  const unsubscribeHandler = (event) => {
    deleteData(`eventAttendees/${unsubscribedEvent}`, authCont.userLog.user.uid);
    setUnsubscribedModalOpen(false);
  };
  const deleteHandler = (event) => {
    deleteData('events', deletedEvent).then(() => {
      setModalOpen(false);
      deleteData('eventAttendees', deletedEvent);
    });
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
        {unsubscribeModalOpen && (
          <div>
            <h2>Are you sure?</h2>
            <button onClick={cancelHandler}>Cancel</button>
            <button
              onClick={(eventObj) => {
                unsubscribeHandler(eventObj);
              }}
            >
              Unsubscribe
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
                {isUnsubscribeButton && (
                  <>
                    <button type='button' onClick={unsubscribeModalHandler(eventObj)}>
                      Unsubscribe
                    </button>
                  </>
                )}
                {isDeleteButton && (
                  <>
                    <button type='button' onClick={deleteModalHandler(eventObj)}>
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
