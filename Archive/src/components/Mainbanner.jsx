import React from 'react';

const MainBanner = () => {
  return (
    <div
      className="text-white text-center"
      style={{
        padding: '100px',
        backgroundImage: 'url(https://www.dnb.com/content/dam/english/image-library/Modernization/heroes/abstract/hero-our-analytics-data-point-icons-1600x400.jpg)', // Add your background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2>Advanced Web Programming Techniques</h2>
      <h3>Final Project By</h3>
      <h3>Nupur Upadhyaya</h3>
      <h3>Student ID: 2295264</h3>
    </div>
  );
};

export default MainBanner;
