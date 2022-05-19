// import { useEffect, useState } from 'react';

import './Style/FilterBar.css';

const FilterBar = ({filterParams, setFilterParams, setToDefault}) => {
  
  const resetHandler = () => {
    setToDefault(true);
    setFilterParams({
      location: '',
      price: '',
      date: '',
      type: '',
      category: ''
    })
  }

  const selectHandler = (event) => {
    setToDefault(true);
    setFilterParams((prev) => ({...prev, [event.target.name]: event.target.value}));
  }

  return (
    <div className='fiter-bar-container'>
      <form className='filter-bar-form'>
        {/* <input type='text' name='location' placeholder='Enter location' /> */}
        <select name='location' onChange={selectHandler} value={filterParams?.location}>
          <option value=''>Any Location</option>
          <option value='online'>Online</option>
          <option value='venue'>In person</option>
        </select>
        <select name='price' onChange={selectHandler} value={filterParams?.price}>
          <option value=''>Price</option>
          <option value='free'>Free</option>
          <option value='ticket'>Paid</option>
        </select>
        <select name='date' onChange={selectHandler} value={filterParams?.date}>
          <option value=''>Any Date</option>
          <option value='today'>Today</option>
          <option value='tomorrow'>Tomorrow</option>
          <option value='thisweek'>This week</option>
          <option value='custom'>Custom</option>
        </select>
        <select name='type' onChange={selectHandler} value={filterParams?.type}>
        <option value=''>Any Type</option>
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
      <select name='category' onChange={selectHandler} value={filterParams?.category}>
        <option value=''>Any Category</option>
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
      <button type='button' onClick={resetHandler}>Reset Filter</button>
      </form>
    </div>
  );
};

export default FilterBar;
