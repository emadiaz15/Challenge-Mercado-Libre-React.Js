import React, { useEffect, useState } from 'react'; // Importa React y los hooks useEffect y useState
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import '../index.css'; // Importa los estilos desde index.css

// Define un array de banners con sus respectivos IDs e URLs de imágenes
const banners = [
  { id: 1, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1719196725107-homemainsliderdesktoplanding.png' },
  { id: 2, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1719239393355-homemainsliderdesktopkingofthekongo.jpg' },
  { id: 3, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1718730699061-homemainsliderdesktopcenidor.jpg' },
  { id: 4, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1719426484732-homemainsliderdesktopbillabong.jpg' },
  { id: 5, image: 'https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1718729504054-homemainsliderdesktoponeill.jpg' },
];

const Carousel: React.FC = () => { // Define un componente funcional llamado Carousel
  const [activeIndex, setActiveIndex] = useState(0); // Declara el estado para almacenar el índice activo del banner

  useEffect(() => { // Hook useEffect para manejar efectos secundarios
    const intervalId = setInterval(() => { // Establece un intervalo para cambiar el banner activo cada 5 segundos
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  const handlePrevClick = () => { // Función para manejar el clic en el botón "anterior"
    setActiveIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const handleNextClick = () => { // Función para manejar el clic en el botón "siguiente"
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handleIndicatorClick = (index: number) => { // Función para manejar el clic en los indicadores
    setActiveIndex(index);
  };

  return ( // Renderiza el carrusel
    <div id="carouselExampleIndicators" className="carousel slide small-carousel" data-bs-ride="carousel">
      <div className="carousel-indicators"> {/* Indicadores del carrusel */}
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
      <div className="carousel-inner"> {/* Contenedor de los elementos del carrusel */}
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

export default Carousel; // Exporta el componente Carousel como exportación predeterminada
