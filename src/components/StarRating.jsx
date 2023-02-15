import "../styles/StarRating.css";
import React from "react";
import Like from '../assets/corail-star.svg'
import NoLike from '../assets/grey-star.svg'

function StarRating(props){
    const rating = props.rating;
    const range = [1,2,3,4,5]

    return(
        <div className="ratingGlobal">
            {range.map((rangeElement, index)=>
                rating >= rangeElement ? <img src={Like} alt="rating star" key={`star--${index}`} className="star"/> : <img src={NoLike} alt="rating star" key={`star--${index}`} className="star"/>
            )}
        </div>
    )
}

export default StarRating;
