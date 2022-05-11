import './Style/DisplayItems.css';

import EventCard from '../HomePage/EventCard';

const DisplayItems = ({database}) => {
  return (
    <div className='display-container'>
      {database &&
        database.map((item, index) => {
          return (
            <div key={index} className='display-items'>
              <EventCard eventCard={item} />
            </div>
          );
        })}
    </div>
  );
};

export default DisplayItems;
