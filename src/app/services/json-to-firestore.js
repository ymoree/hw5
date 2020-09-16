const firebaseConfig = {
  apiKey: 'AIzaSyDXYcHSwRsilff2Hoj5th1qW8JS1knybuc',
  authDomain: 'homework5-6ac1d.firebaseapp.com',
  databaseURL: 'https://homework5-6ac1d.firebaseio.com',
  projectId: 'homework5-6ac1d',
  storageBucket: 'homework5-6ac1d.appspot.com',
  messagingSenderId: '6241199616',
  appId: '1:6241199616:web:dd14ae981bd7312e8c5ae5'
};

const albums = require('./albums.json');
const firebase = require('firebase');

require('firebase/firestore');
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

albums.forEach(function (obj) {
    db.collection("albums")
        .add({
            name: obj.name,
            band: obj.band,
            genre: obj.genre,
            label: obj.label,
            producer: obj.producer,
            releaseDate: new Date(obj.releaseDate)
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});
