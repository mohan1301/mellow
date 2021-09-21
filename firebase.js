import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBUQL9F6PE4uR6o0_o1sbI4wj7v_shyc7c",
    authDomain: "mellow-4e42e.firebaseapp.com",
    projectId: "mellow-4e42e",
    storageBucket: "mellow-4e42e.appspot.com",
    messagingSenderId: "596073024896",
    appId: "1:596073024896:web:21f59f34dd5c3d03e8c565",
    measurementId: "G-KFBDNMNM6H"
  }).auth();
