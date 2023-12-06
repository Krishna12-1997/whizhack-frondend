import React, { useEffect, useState } from 'react';

const useFetch = (uri) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(uri);
        const apiResponse = await response.json();
        if (apiResponse && apiResponse.data) {
          setData(apiResponse.data);
        } else {
          setError(new Error('Invalid API response format.'));
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [uri]);

  return { loading, error, data };
};

export default useFetch;
