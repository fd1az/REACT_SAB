import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import useFetch from './hooks/useFetch';

const postsIds = [1, 2, 3, 4, 5, 6, 7, 8];

// const fetchPost = async (id) => {
//   const apiCall = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   const respuesta = await apiCall.json();

//   if (!respuesta.body) {
//     throw new Error('Todo malllll');
//   }

//   return respuesta;
// };

const App = () => {
  const [index, setIndex] = useState(0);
  const { loading, data: post, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postsIds[index]}`
  );

  const incrementIndex = () => {
    setIndex((prevIndex) => {
      return prevIndex === postsIds.length - 1 ? prevIndex : prevIndex + 1;
    });
  };

  if (loading) {
    return (
      <div className="card">
        <p>loading......</p>{' '}
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <p>Algo salio mal!!!!</p>
      </div>
    );
  }

  return (
    <div className="card">
      {index === postsIds.length - 1 ? (
        'No hay mas post!!!'
      ) : (
        <>
          <h1>{post?.title}</h1>
          <h2>{post?.id}</h2>
          <p>{post?.body}</p>
          <button onClick={incrementIndex}> Siguiente Post</button>
        </>
      )}
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
