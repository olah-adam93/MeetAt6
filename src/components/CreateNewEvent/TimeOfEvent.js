const TimeOfEvent = () => {
  return (
    <div>
      {/*single event, recurring */}
      <label htmlFor='date-of-event'>Add a Date</label>
      <input type='date' id='date-of-event' name='date-of-event' />
      <label htmlFor='time'>Add a time</label>
      <input type='time' id='time-of-event' name='time-of-event' />
      {/*event start, end */}
    </div>
  );
};
export default TimeOfEvent;
