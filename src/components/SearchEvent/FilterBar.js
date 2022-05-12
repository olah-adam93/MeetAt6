import './Style/FilterBar.css';

const FilterBar = () => {
  return (
    <div className='fiter-bar-container'>
      <form className='filter-bar-form'>
        <input type='text' name='location' placeholder='Enter location' />
        <select name='location'>
          <option value='null'>Any Location</option>
          <option value='today'>Online</option>
          <option value='tomorrow'>In person</option>
        </select>
        <select name='price'>
          <option value='null'>Price</option>
          <option value='free'>Free</option>
          <option value='paid'>Paid</option>
        </select>
        <select name='date'>
          <option value='null'>Any Date</option>
          <option value='today'>Today</option>
          <option value='tomorrow'>Tomorrow</option>
          <option value='tomorrow'>This week</option>
          <option value='tomorrow'>Custom</option>
        </select>
        <select name='type'>
        <option value='null'>Any Type</option>
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
      <select name='category'>
        <option value='null'>Any Category</option>
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
      <button type='button'>Reset Filter</button>
      </form>
    </div>
  );
};

export default FilterBar;
