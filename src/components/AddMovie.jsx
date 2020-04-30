import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
  }

  onChangeHandler(event, type) {
    const { value } = event.target;
    if (type === 'rating') this.setState({ [type]: +value });
    else this.setState({ [type]: value });
  }

  SubmitMovie() {
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
      <label htmlFor="input">
        Título
        <input
          type="text"
          value={title}
          id="title"
          onChange={(e) => this.onChangeHandler(e, 'title')}
        />
      </label>
    );
  }

  subtituloLabel() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="input">
        Subtítulo
        <input
          type="text"
          value={subtitle}
          id="subtitle"
          onChange={(e) => this.onChangeHandler(e, 'subtitle')}
        />
      </label>
    );
  }

  imagemLabel() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="input">
        Imagem
        <input
          type="text"
          value={imagePath}
          id="imagePath"
          onChange={(e) => this.onChangeHandler(e, 'imagePath')}
        />
      </label>
    );
  }

  render() {
    const { storyline, rating, genre } = this.state;
    return (
      <div className="add-movie-body">
        <div className="modal-image">
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <img src="" alt="" />
        </div>
        <form>
          {this.tituloLabel()}
          {this.subtituloLabel()}
          {this.imagemLabel()}
          <label htmlFor="input">
            Sinopse
            <textarea
              value={storyline}
              id="storyline"
              onChange={(e) => this.onChangeHandler(e, 'storyline')}
            />
          </label>
          <label htmlFor="input">
            Avaliação
            <input
              type="number"
              value={rating}
              id="rating"
              onChange={(e) => this.onChangeHandler(e, 'rating')}
            />
          </label>
          <label htmlFor="input">
            Gênero
            <select value={genre} id="genre" onChange={(e) => this.onChangeHandler(e, 'genre')}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button type="button" onClick={this.SubmitMovie}>
            Adicionar filme
          </button>
        </form>

      </div>

    );
  }
}
