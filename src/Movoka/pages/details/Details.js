import React from "react";
import Trailer from "../../components/movie/Trailer";
import DirectorList from "../../components/people/DirectorList";
import ActorList from "../../components/people/ActorList";
import SimpleMovieCarousel from "../SimpleMovieCarousel";
import MovieGallery from "../MovieGallery";
import ProviderListMenu from "../../components/providers/ProviderListMenu";
import "./Details.scss";

function ContentsDetails(props) {
	return (
		<div className="contents_details">
			<div className="details_container">
				<div>
					<article className="details_left">
						<div className="inner_container">
							<div className="movie_details">
								<h2>Movie Details</h2>
								<ul>
									<li>{props.title}</li>
									<li>{[props.year, props.languages].join(" ・ ")}</li>
								</ul>
							</div>
						</div>
						<div className="inner_line">
							<hr />
						</div>
						<div className="inner_container">
							<div className="synopsis">
								<h2>Synopsis</h2>
								<div>
									<p className="tagline">{`"${props.tagline}"`}</p>
									<p className="description">{props.description}</p>
								</div>
							</div>
						</div>
					</article>
					<section className="details_left">
						<div className="inner_container">
							<div className="movie_gallery">
								<h2>Gallery</h2>
								<MovieGallery images={props.images} />
							</div>
						</div>
					</section>
					<section className="details_left">
						<div className="inner_container">
							<div className="similar_movies">
								<h2>Similar Movies</h2>
								<SimpleMovieCarousel movies={props.recommand} />
							</div>
						</div>
					</section>
				</div>
				<div>
					<div className="details_right">
						<Trailer
							trailer={props.trailer}
							loadYtTrailer={props.loadYtTrailer}
						/>
					</div>
					<div className="details_right">
						<div className="inner_container">
							<DirectorList directors={props.directors} />
						</div>
					</div>
					<div className="details_right">
						<div className="inner_container">
							<ActorList actors={props.actors} />
						</div>
					</div>
					<div className="details_right">
						<div className="inner_container">
							<ProviderListMenu providers={props.providers} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContentsDetails;
