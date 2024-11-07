import React from 'react';
import '../Styles/SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-button"></div>
    </div>
  );
};

export default SkeletonLoader;
