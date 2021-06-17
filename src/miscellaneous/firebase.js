import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const firebase = require("firebase/firestore");


    var firebaseConfig = {
        apiKey: "AIzaSyBAff6un4QOjZ9E1R_qNLbJo4MH-zcuDsE",
        authDomain: "todo-list-app-001.firebaseapp.com",
        projectId: "todo-list-app-001",
        storageBucket: "todo-list-app-001.appspot.com",
        messagingSenderId: "353498480000",
        appId: "1:353498480000:web:f3070c43237967d757d565",
        measurementId: "G-3N9H6JNN6L"
      };


//initialize firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;





















// let instance

// export default function getFirebase() {
//     if (typeof window !== "undefined") {
//         if (instance) return instance
//         instance = firebase.initializeApp(firebaseConfig);
//         return instance;
//     }

//     return null
// }


// export const createTodo = ({userId, todo}) => {
//   firestore.doc(`todos/${uid}`).update({
//     todos: firebase.firestore.FieldValue.arrayUnion({todo, completed: false})
//   })
// }

// export const updateTodos = ({uid, todos [todo: String, completed: Boolean]}) => {
//   firestore.doc(`todos/${uid}`).update(todos)
// }