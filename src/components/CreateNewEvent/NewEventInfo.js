import AddImageForEvent from './AddImgForEvent';
import NewEventDetails from './NewEventDescription';

const NewEventInfo = ({ setData }) => {
  return (
    <div className='new-event-info-container'>
      <AddImageForEvent setData={setData} />
      <NewEventDetails setData={setData} />
    </div>
  );
};
export default NewEventInfo;
