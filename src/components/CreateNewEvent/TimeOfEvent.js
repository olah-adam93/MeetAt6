const TimeOfEvent = ({ setData, data }) => {
  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='time-of-event'>
      {/*single event, recurring */}
      <div className='event-frequency'>
        <label htmlFor='single'>Single</label>
        <input type="radio" name='eventFrequency' value='single' id="single" onClick={changeHandler}/>
        <label htmlFor='recurring'>Recurring</label>
        <input type="radio" name='eventFrequency' value='recurring' onClick={changeHandler} id="recurring"/>
        {/* <button type='button' name='single'>
          Single
        </button>
        <button type='button' name='requiring'>
          Requiring
        </button> */}
      </div>
      <div>
        <label htmlFor='event-starts'>Event Starts</label>
        <input
          type='date'
          id='event-starts'
          name='eventStarts'
          onChange={changeHandler}
          value={data?.eventStarts}
        />
        <label htmlFor='start-time'>Start Time</label>
        <input type='time' id='start-time' name='startTime' onChange={changeHandler} value={data?.startTime}/>
      </div>

      <div>
        <label htmlFor='event-ends'>Event Ends</label>
        <input type='date' id='event-ends' name='eventEnds' onChange={changeHandler} value={data?.eventEnds}/>
        <label htmlFor='end-time'>End time</label>
        <input type='time' id='end-time' name='endTime' onChange={changeHandler} value={data?.endTime}/>
      </div>
      {/*event start, end */}
    </div>
  );
};
export default TimeOfEvent;
