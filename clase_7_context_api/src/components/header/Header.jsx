import React, { useState, useContext } from 'react';
import './header.css';
import { SongsContext } from '../../context/SongsContext';
const API_URL = 'https://api.lyrics.ovh/suggest';

const Header = ({ fetchSongs, showLyric }) => {
  const { tituloHeader, log } = useContext(SongsContext);
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (e) => {
    e.preventDefault();

    fetchSongs(`${API_URL}/${inputValue}`);
    showLyric(false);
  };
  log();
  return (
    <header>
      <h1>Canciones Piolas {tituloHeader}</h1>
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
