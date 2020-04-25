import React, { Component } from 'react';
import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card ">
        <div className="movie-card-body">
          <img className="movie-card-image" src={movie.imagePath} alt="film description" />
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={movie.rating} />
        </div>
      </div>


    );
  }
}
