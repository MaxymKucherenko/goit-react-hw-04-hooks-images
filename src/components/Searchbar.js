import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({ search }) => {
  const [query, setQuery] = useState('');

  const handleQChange = ({ target }) => {
    setQuery(target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search(query);
    if (query.trim() === '') {
      toast.error('Введите ключевое слово для поиска', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  };

  return (
    <div>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
            name="searchText"
            value={query}
            onChange={handleQChange}
          />
        </form>
      </header>
    </div>
  );
};

export default Searchbar;
