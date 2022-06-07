import React, { useEffect, useRef } from 'react';
import MovieCarousel from '../MovieCarousel';
import './TrendSection.scss';

function TrendSection(props) {
    const _getTrendTitle = function (key) {
        let title;
        switch (key) {
            case 'upComing':
                title = 'Coming up!';
                break;
            case 'nowPlaying':
                title = 'Now Playing';
                break;
            case 'topRated':
                title = 'Top Rated Movies';
                break;
            case 'popular':
                title = 'What\'s Popular';
                break;
        }
        return title;
    };
    const _generateMovieCarousels = function (movieTrend) {
        return Object.keys(movieTrend).map((key, index) => {
            return (
                <div key={index} className="movie_trend">
                    <div className="trend_title">
                        <h1>{_getTrendTitle(key)}</h1>
                    </div>
                    <div className="trend_list">
                        <MovieCarousel movies={movieTrend[key].results}/>
                    </div>
                </div>
            )
        });
    }

    return (
        <section className="home_trend_section">
            {_generateMovieCarousels(props.movieTrend)}
        </section>
    );
}

export default TrendSection;