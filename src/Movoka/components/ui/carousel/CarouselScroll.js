import React, {useEffect, useRef} from 'react';
import Crousel from './Carousel';

function CarouselScroll(props) {
  const _crouselContainer = useRef();
  const _bindClickEvent = function () {
    const container = _crouselContainer.current;
    const onBtnClick = (event) => {
      const target = event.target;
      const carouselList = container.querySelector('.carousel_list');
      const scrollLeft = carouselList.scrollLeft;
      const direction = target.getAttribute('direction');

      if (direction === 'undefined' || direction === null) {
        return;
      }

      if (direction === 'prev') {
        // if (scrollLeft > 0) {
        carouselList.scroll({
          top: 0,
          left: scrollLeft - (props.scrollWidth || 150),
          behavior: 'smooth'
        });
        // }
      } else  {
        carouselList.scroll({
          top: 0,
          left: scrollLeft + (props.scrollWidth || 150),
          behavior: 'smooth'
        });
      }
    }

    container.addEventListener('click', onBtnClick);
  }

  useEffect(() => {
    _bindClickEvent();
  }, []);

  return (
    <>
        <Crousel carouselList={props.carouselList} refContainer={_crouselContainer}/>
    </>
  );
}

export default CarouselScroll;