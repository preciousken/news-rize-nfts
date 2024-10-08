import React, { useRef, useState, useEffect } from "react";

function LazyLoadImage({ src, alt = "Nft_Profile", placeholder, cls="img" }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef}>
      {isVisible ? (
        <img src={src} alt={alt} className={cls} />
      ) : (
        <img src={placeholder} alt="placeholder" className={cls}  />
      )}
    </div>
  );
}

export default LazyLoadImage;
