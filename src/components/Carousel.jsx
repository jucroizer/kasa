import { useState } from "react";
import "../styles/Carousel.css";

function Carousel(props) {
  console.log(props);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  console.log(slideStyles);

  return (
    <div className="kasa-carousel-container">
      {/* <div className="kasa-carousel-image" style={slideStyles}></div> */}
      {/* {props.content.map((elem) => (
                // <img src={elem} alt="appartement"></img>
                <div alt="appartement" className="kasa-carousel-image" style={slideStyles}></div>
            ))}  */}
      <div className="kasa-carousel-arrows">
        <div className="carousel-prev" onClick={goToPrevious}></div>
        <div className="carousel-next" onClick={goToNext}></div>
      </div>

      <div
        alt="appartement"
        className="kasa-carousel-image"
        style={slideStyles}
      ></div>
    </div>
  );
  // </div>
}

export default Carousel;
