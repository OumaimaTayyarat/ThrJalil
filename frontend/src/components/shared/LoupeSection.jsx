import React, { useEffect } from 'react';
import './LoupeSection.css'; // Import your CSS
import yourImage from '../../assets/Capture_d_écran_2024-10-15_144945-removebg-preview.png';


const LoupeSection = () => {
  useEffect(() => {
    // Loupe/magnifier effect
    const loupe = document.querySelector('.loupe');
    const moveLoupe = (e) => {
      loupe.style.top = `${e.clientY - 150}px`;
      loupe.style.left = `${e.clientX - 150}px`;
    };
    document.addEventListener('mousemove', moveLoupe);

    return () => {
      document.removeEventListener('mousemove', moveLoupe);
    };
  }, []);

  

  return (
    <div className="loupe-container">
      <section className="loupe-section" id="home">
        <div className="loupe"></div>
        <img 
          src={yourImage} // Ensure this path is correct
          alt="Background"
          id="image-bg"
          style={{
            width: '50%', // Set the width to 50% (or adjust as needed)
            height: 'auto', // Maintain aspect ratio
            maxWidth: '600px', // Maximum width
            maxHeight: '600px', // Maximum height
            objectFit: 'cover', // Cover the area
            position: 'absolute',
            top: '0%', // Adjust the vertical position
            left: '30%', // Adjust the horizontal position
            zIndex: -1,
            filter: 'grayscale(100%) brightness(0.5)', // Adjust filter as needed
          }}
        />
        
        <div className="text-animations">
          <span className="multiple-text"></span>
          <span className="multiple1-text"></span>
          {/* Add the rest of your spans for other multiple-text classes */}
        </div>
      </section>
    </div>
  );
};

export default LoupeSection;
