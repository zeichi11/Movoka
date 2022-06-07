import React from 'react';
import Summary from '../../components/movie/Summary';
import Rating from '../../components/movie/Rating';
import './Summary.scss';

function ContentsSummary(props) {
    return (
        <div className="contents_summay">
            <div className="summary_container">
                <Summary
                    title={props.title}
                    year={props.year}
                    contentRating={props.contentRating}
                    releaseDate={props.releaseDate}
                    genres={props.genres}
                    languages={props.languages}
                    runtime={props.runtime}
                />
            </div>
            <div className="summary_rating">
                <div className="rating_info">
                    <Rating ratings={ props.ratings } maxRating={ 5 }/>
                </div>
            </div>
        </div>
    )
}

export default ContentsSummary;