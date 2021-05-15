import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      setAlert('Please enter some text', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onTextChange = (event) => setText(event.target.name);

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onTextChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
