// CacheContext.js

import React, { createContext, useContext, useMemo } from 'react';

const CacheContext = createContext();

export const CacheProvider = ({ children }) => {
  const setCachedData = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to cache:', error);
    }
  };

  const getCachedData = (key) => {
    try {
      const cachedData = localStorage.getItem(key);
      return cachedData ? JSON.parse(cachedData) : null;
    } catch (error) {
      console.error('Error retrieving data from cache:', error);
      return null;
    }
  };

  const contextValue = useMemo(() => ({ setCachedData, getCachedData }), [
    setCachedData,
    getCachedData,
  ]);

  return (
    <CacheContext.Provider value={contextValue}>{children}</CacheContext.Provider>
  );
};

export const useCache = () => {
  const context = useContext(CacheContext);
  if (!context) {
    throw new Error('useCache must be used within a CacheProvider');
  }
  return context;
};
