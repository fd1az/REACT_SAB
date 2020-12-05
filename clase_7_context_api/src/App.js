import React, { useState } from 'react';

import './App.css';
import Header from './components/header/Header';
import Lyric from './components/lyric/Lyric';
import SongsList from './components/songs_list/SongsList';

import useFetch from './hooks/useFetch';
const API_URL = 'https://api.lyrics.ovh/v1';
function App() {
  const [songsUrl, setSongsUrl] = useState('');
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyricUrl, setLyricUrl] = useState('');
  const [showLyric, setShowLyric] = useState(false);

  const { loading, data: songs, error } = useFetch(songsUrl);

  const { loading2, data: lyric, error2 } = useFetch(lyricUrl);

  const handlerLyric = (artist, song) => {
    setArtist(artist);
    setTitle(song);
    setLyricUrl(`${API_URL}/${artist}/${song}`);
    setShowLyric(true);
  };

  return (
    <div className="App">
      <Header fetchSongs={setSongsUrl} showLyric={setShowLyric} />
      <div className="container">
        {!showLyric && (
          <SongsList
            songsList={songs}
            displayLyric={handlerLyric}
            fetchSongs={setSongsUrl}
          />
        )}
        {showLyric && lyric ? (
          <Lyric letraCancion={lyric.lyrics} artist={artist} song={title} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
