import { useState, useEffect } from 'react';

export const useSubRedditHook = (fn, limit, pathname) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fn(limit, pathname).then(
      ({ data }) => {
        setData(data.data ? data.data : data);
        setIsLoading(false);
      },
      (e) => setData([])
    );
  }, [fn, limit, pathname]);
  return { isLoading, data };
};

export const useGetHook = (fn, tab) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fn(10, tab).then(
      ({ data }) => {
        setData(data.data);
        setIsLoading(false);
      },
      (e) => setData([])
    );
  }, [fn, tab]);
  return { isLoading, data };
};
