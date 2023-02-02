import "../styles/StarRating.css";

function StarRating({ rating }) {

  const rate = rating;

  if (rate === "1") {
    console.log(rating)
    return (
      <div className="kasa-logement-rate">
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
      </div>
    );
  }
  if (rate === "2") {
    return (
      <div className="kasa-logement-rate">
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
      </div>
    );
  }
  if (rate === "3") {
    return (
      <div className="kasa-logement-rate">
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
      </div>
    );
  }
  if (rate === "4") {
    return <div className="kasa-logement-rate">
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
      </div>
    
  }
  if (rate === "5") {
    return (
      <div className="kasa-logement-rate">
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
        <img
          className="star"
          src="../assets/corail-star.svg"
          alt="etoile"
        />
      </div>
    );
  }

}

export default StarRating;
