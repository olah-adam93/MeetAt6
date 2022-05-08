

const BasicInfoForm = () => {

  return(
     <>
      <label htmlFor="title-of-event">Event title</label>
      <input type="text" id="title-of-event" name="title-of-event"/>
      <label htmlFor="organizer-of-event">Event organizer</label>
      <input type="text" id="organizer-of-event" name="organizer-of-event"/>
      <select name="type-of-event">
        <option value="null">Type</option>
        <option value="trip">Trip</option>
        <option value="workshop">Workshop</option>
        <option value="performance">Concer or Performance</option>
        <option value="conference">Conference</option>
        <option value="dinner">Dinner or Gala</option>
        <option value="festival">Festival or Fair</option>
        <option value="game">Game</option>
        <option value="meeting">Meeting</option>
        <option value="party">Party</option>
        <option value="seminar">Seminar or Talk</option>
        <option value="tournament">Tournament</option>
        <option value="other">Other</option>
      </select>
      <select name="category-of-event">
        <option value="null">Category</option>
        <option value="business">Business and Professional</option>
        <option value="charity">Charity</option>
        <option value="community">Community or Culture</option>
        <option value="family">Family</option>
        <option value="education">Education</option>
        <option value="fashion">Fashion or Beauty</option>
        <option value="food-or-drink">Food or Drink</option>
        <option value="health">Health</option>
        <option value="music">Music</option>
        <option value="religion">Religion</option>
        <option value="science">Science and Technology</option>
        <option value="holiday">Holiday</option>
        <option value="sports">Sports</option>
        <option value="travel">Travel</option>
        <option value="other">Other</option>
      </select>
     </>
  )
}
export default BasicInfoForm