import React from 'react';

import Post from '../../components/post/post';
import useFetch from '../../hooks/useFetch';

import styles from './posts.module.css';

const Posts = () => {
  const { loading, data: posts, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) {
    return <p className="loading"> loading.....</p>;
  }

  if (error) {
    return <p> {error}</p>;
  }

  return (
    <div className={styles.posts}>
      {posts?.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            body={post.body}
            title={post.title}
          />
        );
      })}
    </div>
  );
};

export default Posts;
