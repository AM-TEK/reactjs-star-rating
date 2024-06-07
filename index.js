"use client"

import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({numOfStars = 5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex items-center mt-10">
      {
        [...Array(numOfStars)].map((_, index) => {
          index += 1

          return (
            <FaStar 
              key={index} 
              className={index <= (hover || rating) ? "text-yellow-500" : "text-gray-400"}
              onClick={() => handleClick(index)} 
              onMouseEnter={() => handleMouseEnter(index)} 
              onMouseLeave={() => handleMouseLeave()} 
              size={40} 
            />
          )
        })}
    </div>
  )
}
