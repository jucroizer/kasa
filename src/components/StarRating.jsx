import "../styles/StarRating.css";

function StarRating({ rating }) {
  console.log(rating);

  if (rating === 1) {
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
  if (rating === 2) {
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
  if (rating === 3) {
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
  if (rating === 4) {
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
          className="no-star"
          src="../assets/grey-star.svg"
          alt="pas etoile"
        />
      </div>
    );
  }

  return (
    <div className="kasa-logement-rate">
      <img className="star" src="../assets/corail-star.svg" alt="etoile" />
      <img className="star" src="../assets/corail-star.svg" alt="etoile" />
      <img className="star" src="../assets/corail-star.svg" alt="etoile" />
      <img className="star" src="../assets/corail-star.svg" alt="etoile" />
      <img className="star" src="../assets/corail-star.svg" alt="etoile" />
    </div>
  );
}

export default StarRating;
