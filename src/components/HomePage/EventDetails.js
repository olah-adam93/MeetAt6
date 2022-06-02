const EventDetails = ({eventInfo}) => {
  return (
    <div className='event-details-container'>
      <p className='event-details-text'>{eventInfo?.description}</p>
    </div>
  );
};
export default EventDetails;
