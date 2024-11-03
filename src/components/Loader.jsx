// Loader.js
import React from 'react';
import { useLoader } from '../contexts/LoaderContext';
import './Loader.css'; // Your CSS styles

const Loader = () => {
  const { loading } = useLoader();

  if (!loading) return null; // Do not render if not loading

  return (
    <div className="tg-preloader">
      <div className="tg-loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
