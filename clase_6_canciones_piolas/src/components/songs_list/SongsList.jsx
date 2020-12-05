import React from 'react';
import './songs-list.css';

import Song from '../song/Song';

const SongsList = ({ songsList, displayLyric, fetchSongs }) => {
  return (
    <ul className="songs">
      {songsList?.data.map((song) => (
        <Song song={song} displayLyric={displayLyric} />
      ))}
      <div className="container centered">
        {songsList?.prev ? (
          <button
            className="btn"
            onClick={() =>
              fetchSongs(
                `https://cors-anywhere.herokuapp.com/${songsList.prev}`
              )
            }
          >
            Anterior
          </button>
        ) : null}
        {songsList?.next ? (
          <button
            className="btn"
            onClick={() =>
              fetchSongs(
                `https://cors-anywhere.herokuapp.com/${songsList.next}`
              )
            }
          >
            Siguiente
          </button>
        ) : null}
      </div>
    </ul>
  );
};

export default SongsList;
