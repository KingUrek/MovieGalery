import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './AddMovie.css';


export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',

    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.SubmitMovie = this.SubmitMovie.bind(this);
    this.generateMovie = this.generateMovie.bind(this);
    this.nextMovie = this.nextMovie.bind(this);
    this.previousMovie = this.previousMovie.bind(this);
  }

  onChangeHandler(event, type) {
    const { value } = event.target;
    if (type === 'rating') this.setState({ [type]: +value });
    else this.setState({ [type]: value });
  }

  SubmitMovie() {
    this.props.modalClose();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',

    });
  }

  tituloLabel() {
    const { title } = this.state;
    return (
      <div>

        <label htmlFor="input">
          Título
          <input />
        </label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          id="title"
          onChange={(e) => this.onChangeHandler(e, 'title')}
        />
      </div>
    );
  }

  subtituloLabel() {
    const { subtitle } = this.state;
    return (
      <div>
        <label htmlFor="input">
          Subtítulo
          <input />
        </label>
        <input
          type="text"
          placeholder="Subtitle"
          value={subtitle}
          id="subtitle"
          onChange={(e) => this.onChangeHandler(e, 'subtitle')}
        />
      </div>
    );
  }

  imagemLabel() {
    const { imagePath } = this.state;
    return (
      <div>

        <label htmlFor="input">
          Imagem
          <input />
        </label>
        <input
          style={{ display: this.url ? 'block' : 'none' }}
          placeholder="Imagem Url"
          type="text"
          value={imagePath}
          id="imagePath"
          onChange={(e) => this.onChangeHandler(e, 'imagePath')}
        />
      </div>
    );
  }

  generateMovie() {
    const title = document.getElementById('title');

    if (title && title.value) {
      let filmName = title.value;

      filmName = filmName.split(' ').join('+');
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=22e9ad4abaf918fc1d1d1d5d25707dfe&query=${filmName}`)
        .then((results) => results.json()).then(({ results }) => {
          this.setState({ results, index: 0 }); console.log(results); return results[0].id;
        }).then((id) => {
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=22e9ad4abaf918fc1d1d1d5d25707dfe`).then((e) => e.json()).then((o) => {
            document.querySelector('.modal-image-div').style.display = 'none';
            this.setState({
              title: o.title.split(':')[0],
              subtitle: o.title.split(':')[1] ? o.title.split(':')[1] : o.title.split(':')[0],
              storyline: o.overview,
              imagePath: `https://image.tmdb.org/t/p/w300/${o.backdrop_path}`,
              profilePath: `https://image.tmdb.org/t/p/w300/${o.poster_path}`,
            });
          });
        });
    } else {
      alert('adicione um titulo');
    }
  }

  nextMovie() {
    const { results, index } = this.state;
    const { id } = results[index + 1];
    this.setState({ results, index: index + 1 });
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=22e9ad4abaf918fc1d1d1d5d25707dfe`).then((e) => e.json()).then((o) => {
      this.setState({ title: o.title.split(':')[0], subtitle: o.title.split(':')[1], storyline: o.overview, imagePath: `https://image.tmdb.org/t/p/w300/${o.backdrop_path}`, profilePath: `https://image.tmdb.org/t/p/w300/${o.poster_path}` });
    });
  }

  previousMovie() {
    console.log('bora');
    const { results, index } = this.state;
    if (index > 0) {
      const { id } = results[index - 1];
      this.setState({ results, index: index - 1 });
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=22e9ad4abaf918fc1d1d1d5d25707dfe`).then((e) => e.json()).then((o) => {
        this.setState({ title: o.title.split(':')[0], subtitle: o.title.split(':')[1], storyline: o.overview, imagePath: `https://image.tmdb.org/t/p/w300/${o.backdrop_path}`, profilePath: `https://image.tmdb.org/t/p/w300/${o.poster_path}` });
      });
    }
  }


  render() {
    const { storyline, rating, genre, imagePath, results, index } = this.state;
    return (
      <div className="add-movie-body">

        <ArrowBackIosIcon style={{ display: results && index != 0 ? 'block' : 'none' }} onClick={this.previousMovie} className="arrow left" />
        <ArrowForwardIosIcon style={{ display: results && index != results.length - 1 ? 'block' : 'none' }} onClick={this.nextMovie} className="arrow rigth" />


        <div className="modal-image modal-image-div">
          <ButtonGroup className="button-wrap" orientation="vertical" color="primary" aria-label="outlined primary button group">
            <Button onClick={this.generateMovie}>Generate Film</Button>
          </ButtonGroup>
        </div>
        <img className="modal-image " src={imagePath} alt="" />
        <form>
          {this.tituloLabel()}
          {this.subtituloLabel()}
          {this.imagemLabel()}
          <label htmlFor="input">
            Sinopse
            <input type="text" />
          </label>
          <textarea
            placeholder="Storyline"
            value={storyline}
            id="storyline"
            onChange={(e) => this.onChangeHandler(e, 'storyline')}
          />
          <label htmlFor="input">
            Avaliação
            <input type="text" name="" id="" />
          </label>
          <input
            placeholder="Rating"
            type="number"
            value={rating}
            id="rating"
            onChange={(e) => this.onChangeHandler(e, 'rating')}
          />
          <label htmlFor="input">
            Gênero
            <input type="text" />
          </label>
          <select value={genre} id="genre" onChange={(e) => this.onChangeHandler(e, 'genre')}>

            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>

          {/* <button style={{ display: 'none' }} type="button" onClick={this.SubmitMovie}>
            Adicionar filme
          </button> */}
          <Button className="send-button" variant="contained" color="primary" onClick={this.SubmitMovie}>
            Adicionar filme
          </Button>
        </form>

      </div>

    );
  }
}
