import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Coment: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('lista-filmes').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          Coment: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('lista-filmes').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Lista de Filmes</Link></h4>
            <h3 class="panel-title">
              {this.state.Coment.titulo}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Ano:</dt>
              <dd>{this.state.Coment.ano}</dd>
              <dt>Gênero:</dt>
              <dd>{this.state.Coment.genero}</dd>
              <dt>Diretor:</dt>
              <dd>{this.state.Coment.diretor}</dd>
              <dt>Ator:</dt>
              <dd>{this.state.Coment.ator}</dd>
            </dl>
            <Link to={`/editar/${this.state.key}`} class="btn btn-success">Editar</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;