import React from 'react';

const Lyric = ({ letraCancion, artist, song }) => {
  const lyrics = letraCancion.replace(/(\r\n|\r|\n)/g, '<br>');

  const createMarkup = () => {
    return { __html: lyrics };
  };
  return (
    <div>
      <h2>
        <strong>{artist}</strong> - {song}
      </h2>
      <span dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default Lyric;
