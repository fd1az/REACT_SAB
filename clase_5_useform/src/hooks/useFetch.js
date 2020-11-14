import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);

  return {
    loading,
    data,
    error,
  };
};

export default useFetch;
