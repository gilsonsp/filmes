import * as firebase from 'firebase';
// eslint-disable-next-line no-unused-vars
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
        apiKey: "AIzaSyCEKdlxhFgj4YUAU_BBLkssWa-Ig4-sBjM",
        authDomain: "filmes-50649.firebaseapp.com",
        databaseURL: "https://filmes-50649.firebaseio.com",
        projectId: "filmes-50649",
        storageBucket: "filmes-50649.appspot.com",
        messagingSenderId: "1065202437093",
        appId: "1:1065202437093:web:ad5b794fcccc730fcabd0c"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase; 
