import React, {useRef} from 'react';
import './Carousel.scss';

function Carousel(props) {
    
  return (
    <div className="carousel" ref={props.refContainer}>
      <div className="carousel_list">
        {props.carouselList}
      </div>
      <div className="prev carousel_btn">
        <div direction="prev">
          {"<"}
        </div>
      </div>
      <div className="next carousel_btn">
        <div direction="next">
          {">"}
        </div>
      </div>
    </div>
  );
}

export default Carousel;