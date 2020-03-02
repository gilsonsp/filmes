import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      titulo: '',
      ano: '',
      genero: '',
      diretor: '',
      ator: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('coments').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Coment = doc.data();
        this.setState({
          key: doc.id,
          titulo: Coment.titulo,
          ano: Coment.ano,
          genero: Coment.genero,
          diretor: Coment.diretor,
          ator: Coment.ator
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({Coment:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { titulo, ano, genero, diretor, ator } = this.state;

    const updateRef = firebase.firestore().collection('coments').doc(this.state.key);
    updateRef.set({
        titulo,
        ano,
        genero,
        diretor,
        ator
    }).then((docRef) => {
      this.setState({
        key: '',
        titulo: '',
        ano: '',
        genero: '',
        diretor:'',
        ator:''
      });
      this.props.history.push("/mostrar/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Editar Filme
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/mostrar/${this.state.key}`} class="btn btn-primary">Lista de Filme</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="titulo">Tìtulo:</label>
                <input type="text" class="form-control" name="titulo" value={this.state.titulo} onChange={this.onChange} placeholder="Tìtulo" />
              </div>
              <div class="form-group">
                <label for="ano">Ano:</label>
                <input type="text" class="form-control" name="ano" value={this.state.ano} onChange={this.onChange} placeholder="Ano" />
              </div>
              <div class="form-group">
                <label for="genero">Gênero:</label>
                <input type="text" class="form-control" name="genero" value={this.state.genero} onChange={this.onChange} placeholder="Gênero" />
              </div>
              <div class="form-group">
                <label for="diretor">Diretor:</label>
                <input type="text" class="form-control" name="diretor" value={this.state.diretor} onChange={this.onChange} placeholder="Diretor" />
              </div>
              <div class="form-group">
                <label for="ator">Ator:</label>
                <input type="text" class="form-control" name="ator" value={this.state.ator} onChange={this.onChange} placeholder="Ator" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;