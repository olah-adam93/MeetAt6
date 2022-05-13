const NewEventDescription = ({ setData }) => {
  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='new-event-description'>
      <h2>Description of the Event</h2>
      <textarea name='description' placeholder='Write here...' onChange={changeHandler} />
    </div>
  );
};
export default NewEventDescription;
