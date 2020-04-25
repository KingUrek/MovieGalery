import React, { Component } from 'react';
import MovieCard from './MovieCard';


export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((film) => <MovieCard movie={film} key={film.title} />)}
      </div>

    );
  }
}
