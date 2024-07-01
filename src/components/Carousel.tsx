import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Importa los estilos desde index.css

const banners = [
  { id: 1, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1719196725107-homemainsliderdesktoplanding.png' },
  { id: 2, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1719239393355-homemainsliderdesktopkingofthekongo.jpg' },
  { id: 3, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1718730699061-homemainsliderdesktopcenidor.jpg' },
  { id: 4, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1719426484732-homemainsliderdesktopbillabong.jpg' },
  { id: 5, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1718729504054-homemainsliderdesktoponeill.jpg' },
];
const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide small-carousel" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === activeIndex ? 'active' : ''}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div key={banner.id} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <img src={banner.image} className="d-block w-100" alt={`Banner ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrevClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNextClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;