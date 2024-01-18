// import React, { useEffect, useState } from 'react';

// const useFetch = (uri) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);

//       try {
//         const response = await fetch(uri);
//         const apiResponse = await response.json();
//         if (apiResponse && apiResponse.data) {
//           setData(apiResponse.data);
//         } else {
//           setError(new Error('Invalid API response format.'));
//         }

//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [uri]);

//   return { loading, error, data };
// };

// export default useFetch;

import { useEffect, useState } from 'react';
import { useCache } from '../CacheContext';

const useFetch = (uri) => {
  const { getCachedData, setCachedData } = useCache();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const cachedData = getCachedData(uri);

        if (cachedData) {
          console.log(`Data fetched from cache for URI: ${uri}`);
          setData(cachedData);
        } else {
          const response = await fetch(uri);
          const apiResponse = await response.json();

          if (response.ok) {
            setData(apiResponse.data);
            setCachedData(uri, apiResponse.data);
          } else {
            setError(new Error(`Failed to fetch data: ${apiResponse.message}`));
          }
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [uri, getCachedData, setCachedData]);

  return { loading, error, data };
};

export default useFetch;
