import React from 'react';
import './song.css';

const Song = ({ song, displayLyric }) => {
  return (
    <li>
      <span>
        <strong>{song.artist.name}</strong> - {song.title}
      </span>
      <button
        class="btn"
        onClick={() => displayLyric(song.artist.name, song.title)}
      >
        Letra
      </button>
    </li>
  );
};

export default Song;
