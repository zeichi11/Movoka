import React from 'react';
import './Banner.scss';

function Banner(props) {
    return (
        <div className="home_banner">
            <div className="banner" style={{ 'background': `url(https://www.themoviedb.org/t/p/original${props.movie.backdrop_path}) center center / cover no-repeat` }}>
                <div className="banner_title">
                    <h1>취향에 맞는 인기작</h1>
                    <p>최신 영화, 인기 영화, 가장 많이 보는 작품을 확인하세요.</p>
                </div>
            </div>
            <div className="banner_shadow_top"></div>
            <div className="banner_shadow_bottom"></div>
        </div>
    );
}

export default Banner;