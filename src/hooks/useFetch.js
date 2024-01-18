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


import React, { useEffect, useState } from 'react';
import { useCache } from '../CacheContext';

const useFetch = (uri) => {
  const { getCachedData, setCachedData } = useCache(); 
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // Check if data is in the cache
        const cachedData = getCachedData(uri);

        if (cachedData) {
          setData(cachedData);
          setLoading(false);

          // Fetch in the background to update the cache with the latest data
          fetchAndCacheData();
        } else {
          // If not in the cache, make a network request
          await fetchAndCacheData();
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const fetchAndCacheData = async () => {
      try {
        const response = await fetch(uri);
        const apiResponse = await response.json();
        
        if (apiResponse && apiResponse.data) {
          setData(apiResponse.data);

          // Update the cache with the latest data
          setCachedData(uri, apiResponse.data);
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
  }, [uri, getCachedData, setCachedData]);

  return { loading, error, data };
};

export default useFetch;
