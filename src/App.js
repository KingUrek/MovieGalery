import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import FilmeForms from './components/FilmeForms';
import ReactDOM from 'react-dom'
import MovieCard from './components/MovieCard';

function App() {
  let filmes = [...movies]

  function rerender(object) {
    filmes.push(object)


    ReactDOM.render(
      filmes.map((film) => <MovieCard movie={film} key={film.title} />),
      document.querySelector('.movie-list')
    );

  }


  // render() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={filmes} />
      <FilmeForms function={rerender} />

    </div>
  );
  // }
}

export default App;
