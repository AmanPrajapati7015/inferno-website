import React, {useEffect, useRef} from 'react';
import './marque.css'; // Import the CSS for styling


const Marquee = ({images}) => {

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let startPosition = 0;

    const scrollMarquee = () => {
      startPosition -= 3; // Speed of scrolling (adjust as needed)
      if (Math.abs(startPosition) >= marquee.scrollWidth / 2) {
        startPosition = 0; // Reset position when halfway is scrolled
      }
      marquee.style.transform = `translateX(${startPosition}px)`;
      requestAnimationFrame(scrollMarquee); // Ensure smooth scrolling
    };

    scrollMarquee();
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee-content" ref={marqueeRef}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} />
        ))}
        {/* Duplicate the images for a seamless effect */}
        {images.map((src, index) => (
          <img key={`duplicate-${index}`} src={src} alt={`Duplicate ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
