import React, { useState } from "react";

function useHacerPedido() {
  const [currentActive, setCurrentActive] = useState(1);
  const [circles, setCircles] = useState([1, 2, 3]);

  const handleNextClick = () => {
  
    setCurrentActive((prevActive) => {
      const nextActive = prevActive + 1;
      return nextActive > circles.length ? circles.length : nextActive;
    });
  };

  const handlePrevClick = () => {
    
    setCurrentActive((prevActive) => {
      const nextActive = prevActive - 1;
      return nextActive < 1 ? 1 : nextActive;
    });
  };

  const renderCircles = () => {
    return circles.map((circle, idx) => {
      return (
        <div
          key={idx}
          className={`circle ${idx < currentActive ? "active" : ""}`}
        >
          {[circle]}{" "}
        </div>
      );
    });
  };

  return {
    currentActive,
    circles,
    handleNextClick,
    handlePrevClick,
    renderCircles,
  };
}

export default useHacerPedido;
