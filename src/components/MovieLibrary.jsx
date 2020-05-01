import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      modal: true,
    };
    this.addMovie = this.addMovie.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = [...movies];
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((e) => e.bookmarked);
    }
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((e) => e.genre === selectedGenre);
    }
    if (searchText) {
      filteredMovies = filteredMovies.filter((e) => e.title.includes(searchText)
        || e.subtitle.includes(searchText) || e.storyline.includes(searchText));
    }

    return filteredMovies;
  }

  addMovie(obj) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, obj] });
  }

  closeModal() {
    console.log('fechou o modal');
    this.setState({ modal: false });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, modal } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          onBookmarkedChange={(event) => this.setState({ bookmarkedOnly: event.target.checked })}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList movies={this.filterMovies()} />
        <Modal
          open={modal}
          onClose={() => this.setState({ modal: false })}
        >
          <AddMovie onClick={this.addMovie} modalClose={this.closeModal} />

        </Modal>
        <Button style={{ marginLeft: '20px' }} variant="contained" color="primary" onClick={() => this.setState({ modal: true })}>
          Create New Card
        </Button>


      </div>

    );
  }
}
