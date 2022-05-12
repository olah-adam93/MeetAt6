import './Style/SearchBar.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

const SearchBar = ({setSearchQuery}) => {
  console.log('searchbar render');

  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value);
    console.log('search:', event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submitted');

    setSearchQuery(searchValue);

    // if (searchValue === '') {
    //   setDbItems(testDb);
    // } else {
    //   setDbItems(
    //     dbItems.filter((item) => {
    //       return item.title.toLowerCase().includes(searchValue.toLowerCase());
    //     })
    //   );
    // }
    setSearchValue('');
  };

  return (
    <div className='search-bar-container'>
      <form className='search-bar-form' onSubmit={onSubmitHandler}>
        <input
          type='text'
          name='searchbar'
          placeholder='Search for keywords'
          onChange={onChangeHandler}
          value={searchValue}
        />
        <button type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
