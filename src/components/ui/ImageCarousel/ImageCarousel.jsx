import { useEffect, useState } from "react";
import "./ImageCarousel.css";
import PasaPorTuPremio from "../../../assets/images/pasa por tu premio.png"
import Congo from "../../../assets/images/congo.png"
import Payaso from "../../../assets/images/payaso.png"
import Bass from "../../../assets/images/bigbass.jpg"

const defaultImages = [
  {
    id: 1,
    image: PasaPorTuPremio,
      /* "https://images.pexels.com/photos/7594224/pexels-photo-7594224.jpeg?auto=compress&cs=tinysrgb&w=1600", */

    title: "RECLAMA TU BONO DE BIEVENIDA",
    description: "Obten muchos beneficios desde el primer juego.",
  },
  {
    id: 2,
    image: Congo,
/*      "https://images.pexels.com/photos/7594192/pexels-photo-7594192.jpeg?auto=compress&cs=tinysrgb&w=1600", */
    title: "Premios destacados",
    description: "Descubrí nuestras promociones y premios especiales.",
  },
  {
    id: 3,
    image: Payaso,
      /* "https://images.pexels.com/photos/7594233/pexels-photo-7594233.jpeg?auto=compress&cs=tinysrgb&w=1600", */
    title: "La suerte está de tu lado",
    description: "Conocé las novedades y promociones vigentes.",
  },
  {
    id: 4,
    image: Bass,
      /* "https://images.pexels.com/photos/7594184/pexels-photo-7594184.jpeg?auto=compress&cs=tinysrgb&w=1600", */
    title: "Sé un ganador",
    description: "Retirá tus premios, retiro de ganancias las 24 HS.",
  },
];

function ImageCarousel({
  images = defaultImages,
  autoPlay = true,
  interval = 5000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <section className="image-carousel" aria-label="Galería de promociones">
      <div className="carousel-track">
        {images.map((slide, index) => (
          <article
            key={slide.id ?? index}
            className={`carousel-slide ${
              index === currentIndex ? "carousel-slide--active" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title || "Imagen del casino"}
              className="carousel-image"
            />

            <div className="carousel-overlay"></div>

            <div className="carousel-content">
              {slide.label && (
                <span className="carousel-label">{slide.label}</span>
              )}

              <h2>{slide.title}</h2>

              {slide.description && (
                <p>{slide.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel-button carousel-button--prev"
            onClick={previousSlide}
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <button
            type="button"
            className="carousel-button carousel-button--next"
            onClick={nextSlide}
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="carousel-dots">
            {images.map((slide, index) => (
              <button
                key={slide.id ?? index}
                type="button"
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot--active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ImageCarousel;