import React from 'react';
import PropTypes from 'prop-types';
import ScreenShot from '../components/movie/ScreenShot';
import FlexibleMovieList from '../components/movie/FlexibleMovieList';
import CarouselScroll from '../components/ui/carousel/CarouselScroll';

function MovieGallery(props) {
    const _renderScreenShot = function (image) {
        return (
            <ScreenShot
                id={image.id} 
                fullW={image.width} 
                fullH={image.height}
                src={image.link}
            />
        );
    }

    const _renderScreenShotList = function (images) {
        const imageList = [];

        images.forEach((image, index) => {
            imageList.push((<li key={index}>{_renderScreenShot(image)}</li>));
        });

        return (<FlexibleMovieList movieList={imageList} />);
    }

    return (
        <CarouselScroll carouselList={_renderScreenShotList(props.images)} scrollWidth={580}/>
    );
}

export default MovieGallery;