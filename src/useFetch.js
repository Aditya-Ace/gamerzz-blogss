import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortFetch.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('We could not fetch the data right now.');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === 'AbortError') console.log('Fetch Aborted');
          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);
    return () => abortFetch.abort();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}
