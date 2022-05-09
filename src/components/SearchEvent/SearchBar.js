import './Style/SearchBar.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [buttonStyle, setButtonStyle] = useState(false);

  const inputChangeHandler = (event) => {
    console.log('change');
    if(event.target.value !== '') {
      setButtonStyle(true);
      console.log(buttonStyle);
    }
  }

  return (
    <div className='search-bar-container'>
      <form className='search-bar-form'>
        <input type='text' name='searchbar' placeholder='Search for keywords' onChange={ inputChangeHandler }/>
        <button type='button'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </form>
    </div>
  );
};

export default SearchBar;
