import React, { useState } from 'react';
import './header.css';
const API_URL = 'https://api.lyrics.ovh/suggest';

const Header = ({ fetchSongs, showLyric }) => {
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (e) => {
    e.preventDefault();

    fetchSongs(`${API_URL}/${inputValue}`);
    showLyric(false);
  };

  return (
    <header>
      <h1>Canciones Piolas</h1>
      <form id="form" onSubmit={inputHandler}>
        <input
          type="text"
          id="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Canción o Artista...."
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
};

export default Header;
