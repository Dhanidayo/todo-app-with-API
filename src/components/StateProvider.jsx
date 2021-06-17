import { createContext, useReducer } from 'react';

export const AppContext = createContext();

//reducer function
function reducer(state, action) {
    //create a copy of your state
    let stateCopy = {...state};

    //set the name on stateCopy to action
    stateCopy.action = action;

    if (action.type === 'ADD_TODO') {
        stateCopy.todoList.unshift(action.payload);
    }
    return stateCopy;
}

const initialState = {
    todoList: [],
    isLoggedIn: false,
    action: '',
};

function StateProvider({ children }) { 

    const [state, dispatch] = useReducer(reducer, initialState); //the useReducer takes in a reducer function and an initialState. The initialState is an object

    const contextObject = {
        state,
        dispatch,
    };

    return(
        <AppContext.Provider value={contextObject}>
            { children }
        </AppContext.Provider>
    );
}

export default StateProvider;

//reducer function - this is the fuction used to set state in useReducer
//the reducer function always takes in state and action
//the dispatch when called calls the reducer function which has the state and action












































































// const [state, dispatch] = useReducer(reducer, initialState);
// const { dispatch } = useContext(AppContext);

// function reducer(state, action) {
//     if (action.type === 'ADD_TODO') {
//         return {
//             ...state,
//             todos: [action.payload, ...state.todos],
//         };
//     }
//     if (action.type === 'SET_TODOS') {
//         return {
//             ...state,
//             todos: action.payload,
//         };
//     }
//     if (action.type === 'LOGIN') {
//         return {
//             ...state,
//             isLoggedIn: true,
//             ...action.payload,
//         }
//     }
//     if (action.type === 'LOGOUT') {
//         return {
//             ...state,
//             isLoggedIn: false,
//             userEmail: null,
//             userId: null,
//         };
//     }
//     return state;
// }

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(result => dispatch({ type: 'SET_POSTS', payload: result }));
// }, []);

// export default StateProvider;


//import { createContext, useEffect, useState } from 'react';
// import getFirebase from '../firebase';

// export const AppContext = createContext();

// const initialState = {
//     isLoggedIn: false,
//     userId: null,
//     userEmail: null,
//     items: [],
// };

// function StateProvider({children}) {
//     //Create a currentUser state
//     const [currentUser, setCurrentUser] = useState(initialState);

//     // Listen to onAuthStateChanged
//     useEffect(() => {
//     const firebase = getFirebase();

//     if (firebase) {
//       firebase.auth().onAuthStateChanged((currentUser) => {
//         if (currentUser) {
//           setCurrentUser(currentUser.email);
//         } else {
//           setCurrentUser(null);
//         }
//       });
//     }
//     }, []);

//     return (
//         <AppContext.Provider value={{state: currentUser, setState: setCurrentUser}}>
//             {children}
//         </AppContext.Provider>
//     );
// }
