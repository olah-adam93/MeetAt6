const EventDetails = ({eventInfo}) => {
  return (
    <div className='event-details-container'>
      <p className='event-details-text'>{eventInfo?.description}</p>
      <br/>
      <p>Tags</p>
      <span className='event-details-tags'>{eventInfo?.type}</span>
      <span className='event-details-tags'>{eventInfo?.category}</span>

    </div>
  );
};
export default EventDetails;
