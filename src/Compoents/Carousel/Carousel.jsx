import { useEffect, useState } from "react";
import "./Carousel.css";

export const CorouselItem = ({ id }) => {
  return (
    <div className="corouselItemCon">
      <div className="corimg"></div>
      <div className="corHead">Ankit Arora</div>
      <div className="corTitle">Co Founder</div>
    </div>
  );
};

const Carousel = ({ corPosProp}) => {
    
  const arr = [1, 2, 3, 4, 11, 5, 6, 7, 8];

  return (
   
    <>
    
      <div className="corousel">
        <div className="innerCorousel" style={{ transform:`translateX(-${corPosProp}%)` }}>
          {arr.map((ele) => {
            return <CorouselItem id={ele} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
