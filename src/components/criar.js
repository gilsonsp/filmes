import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('lista-filmes');
    this.state = {
      titulo: '',
      ano: '',
      diretor: '',
      ator: ''

    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { titulo, ano, genero, diretor, ator } = this.state;

    this.ref.add({
      titulo,
      ano,
      genero,
      diretor,
      ator
    }).then((docRef) => {
      this.setState({
        titulo: '',
        ano: '',
        genero: '',
        diretor:'',
        ator:''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { titulo, ano, genero, diretor, ator } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Adicionar Filme
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="titulo">Título:</label>
                <input type="text" class="form-control" name="titulo" value={titulo} onChange={this.onChange} placeholder="Título" />
              </div>
              <div class="form-group">
                <label for="ano">Ano:</label>
                <textArea class="form-control" name="ano" onChange={this.onChange} placeholder="Ano" cols="80" rows="3">{ano}</textArea>
              </div>
              <div class="form-group">
                <label for="genero">Gênero:</label>
                <input type="text" class="form-control" name="genero" value={genero} onChange={this.onChange} placeholder="Gênero" />
              </div>
              <div class="form-group">
                <label for="diretor">Diretor:</label>
                <input type="text" class="form-control" name="diretor" value={diretor} onChange={this.onChange} placeholder="Diretor" />
              </div>
              <div class="form-group">
                <label for="ator">Ator:</label>
                <input type="text" class="form-control" name="ator" value={ator} onChange={this.onChange} placeholder="Ator" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
