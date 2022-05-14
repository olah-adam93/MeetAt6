import { useState } from 'react';

const BasicInfoForm = ({ setData, data }) => {
  const [checked, setChecked] = useState(false);
  const changeCheckedHandler = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='basic-info-box'>
      <label htmlFor='title-of-event'>Event title</label>
      <input type='text' id='title-of-event' name='title' onChange={changeHandler} value={data?.title}/>
      <label htmlFor='organizer-of-event'>Event organizer</label>
      <input
        type='text'
        id='organizer-of-event'
        name='organizer'
        onChange={changeHandler}
        value={data?.organizer}
      />
      <label htmlFor='event-category'>Event category</label>
      <select name='type' onChange={changeHandler} value={data?.type}>
        <option value='null'>Type</option>
        <option value='trip'>Trip</option>
        <option value='workshop'>Workshop</option>
        <option value='performance'>Concer or Performance</option>
        <option value='conference'>Conference</option>
        <option value='dinner'>Dinner or Gala</option>
        <option value='festival'>Festival or Fair</option>
        <option value='game'>Game</option>
        <option value='meeting'>Meeting</option>
        <option value='party'>Party</option>
        <option value='seminar'>Seminar or Talk</option>
        <option value='tournament'>Tournament</option>
        <option value='other'>Other</option>
      </select>
      <select name='category' onChange={changeHandler} value={data?.category}>
        <option value='null'>Category</option>
        <option value='business'>Business and Professional</option>
        <option value='charity'>Charity</option>
        <option value='community'>Community or Culture</option>
        <option value='family'>Family</option>
        <option value='education'>Education</option>
        <option value='fashion'>Fashion or Beauty</option>
        <option value='food-or-drink'>Food or Drink</option>
        <option value='health'>Health</option>
        <option value='music'>Music</option>
        <option value='religion'>Religion</option>
        <option value='science'>Science and Technology</option>
        <option value='holiday'>Holiday</option>
        <option value='sports'>Sports</option>
        <option value='travel'>Travel</option>
        <option value='other'>Other</option>
      </select>
      <label htmlFor='addendantLimit'>Attendant limit</label>
      <input type='checkbox' name='addendantLimit' id='addendant-limit' onChange={changeHandler} value={checked} onClick={changeCheckedHandler} defaultValue={data?.addendantLimit}/>
      {checked && (
        <div>
          <label htmlFor='attendant-number-limit'>Attendant limit number</label>
          <input
            type='number'
            id='attendant-number-limit'
            name='attendant'
            onChange={changeHandler}
            value={data?.attendant}
          />
        </div>
      )}
    </div>
  );
};
export default BasicInfoForm;
