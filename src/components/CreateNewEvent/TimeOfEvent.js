const TimeOfEvent = () => {
  return (
    <div>
      {/*single event, recurring */}
      <label htmlFor='event-starts'>Event Starts</label>
      <input type='date' id='event-starts' name='event-starts' />
      <label htmlFor='start-time'>Start Time</label>
      <input type='time' id='start-time' name='start-time' />

      <label htmlFor='event-ends'>Event Ends</label>
      <input type='date' id='event-ends' name='event-ends' />
      <label htmlFor='end-time'>End time</label>
      <input type='time' id='end-time' name='end-time' />
      {/*event start, end */}
    </div>
  );
};
export default TimeOfEvent;
