import React, { Component } from 'react';
import './FilmForms.css';


export default class FilmeForms extends Component {
  makeObj() {
    const title = document.querySelector('.title').value;
    document.querySelector('.title').value = '';
    const subtitle = document.querySelector('.subtitle').value;
    document.querySelector('.subtitle').value = '';
    const storyline = document.querySelector('.description').value;
    document.querySelector('.description').value = '';
    const imagePath = document.querySelector('.imagemURL').value;
    document.querySelector('.imagemURL').value = '';
    const rating = document.querySelector('.rating-input').value;
    document.querySelector('.rating-input').value = '';
    const film = { title, subtitle, storyline, rating, imagePath }
    return film

  }


  render() {
    return (
      <div style={{ marginBottom: '100px' }} classname="addForm" >
        <label>
          Title
          <input type="subtitle" className="title" />
        </label>


        <label>
          Subtitle
          <input type="subtitle" className="subtitle" />
        </label>

        <label>
          ImagemURl
          <input type="url" className="imagemURL" />

        </label>
        <label>
          Rating
          <input type="text" className="rating-input" />
        </label>

        <label>
          Description
          <input type="text" className="description" />
        </label>
        <span type="button" className="sendButton" onClick={() => this.props.function(this.makeObj())}>Create Film</span>


      </div>


    );
  }
}
