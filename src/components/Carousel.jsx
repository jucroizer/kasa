import { useState } from "react";
import "../styles/Carousel.css";

function Carousel(props) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const roller = props.content.length;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.content.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === props.content.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStyles = {
    backgroundImage: `url(${props.content[currentIndex]}`,
  };

  return (
    <div className="kasa-carousel-container">
      <div className="kasa-carousel-arrows">
        <div className="carousel-prev" onClick={goToPrevious}></div>
        <div className="carousel-next" onClick={goToNext}></div>
      </div>
      <div alt="appartement" className="kasa-carousel-image" style={slideStyles}>
        <p>{currentIndex + 1}/{roller}</p>
      </div>
    </div>
  );

}

export default Carousel;
