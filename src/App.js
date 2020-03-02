import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('lista-filmes');
    this.unsubscribe = null;
    this.state = {
      coments: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const coments = [];
    querySnapshot.forEach((doc) => {
      const { titulo, ano, genero, diretor, ator } = doc.data();
      coments.push({
        key: doc.id,
        doc, // DocumentSnapshot
        titulo,
        ano,
        genero,
        diretor,
        ator
      });
    });
    this.setState({
      coments
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Lista de Filmes
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Adicionar Filme</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Ano</th>
                  <th>Gênero</th>
                  <th>Diretor</th>
                  <th>Ator</th>
                </tr>
              </thead>
              <tbody>
                {this.state.coments.map(Coment =>
                  <tr>
                    <td><Link to={`/mostrar/${Coment.key}`}>{Coment.titulo}</Link></td>
                    <td>{Coment.ano}</td>
                    <td>{Coment.genero}</td>
                    <td>{Coment.diretor}</td>
                    <td>{Coment.ator}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;