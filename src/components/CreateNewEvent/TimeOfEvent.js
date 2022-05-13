const TimeOfEvent = ({ setData }) => {
  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='time-of-event'>
      {/*single event, recurring */}
      <div className='event-frequency'>
        <button type='button' name='single'>
          Single
        </button>
        <button type='button' name='requiring'>
          Requiring
        </button>
      </div>
      <div>
        <label htmlFor='event-starts'>Event Starts</label>
        <input
          type='date'
          id='event-starts'
          name='event-starts'
          onChange={changeHandler}
        />
        <label htmlFor='start-time'>Start Time</label>
        <input type='time' id='start-time' name='start-time' onChange={changeHandler} />
      </div>

      <div>
        <label htmlFor='event-ends'>Event Ends</label>
        <input type='date' id='event-ends' name='event-ends' onChange={changeHandler} />
        <label htmlFor='end-time'>End time</label>
        <input type='time' id='end-time' name='end-time' onChange={changeHandler} />
      </div>
      {/*event start, end */}
    </div>
  );
};
export default TimeOfEvent;
