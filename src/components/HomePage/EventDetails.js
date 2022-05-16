const EventDetails = ({eventInfo}) => {
  return (
    <div className='event-details'>
      <p className='event-details-text'>{eventInfo?.description}</p>
    </div>
  );
};
export default EventDetails;
