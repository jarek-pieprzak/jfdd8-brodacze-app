import firebase from 'firebase'

const initialState = {
  user: null
};

let unsubscribe = null;
export const enableSync = () => dispatch => {
  dispatch(disableSync());
  unsubscribe = firebase.auth().onAuthStateChanged(
    user => dispatch({type: 'auth/SET_USER', user})
  )
};

export const disableSync = () => dispatch => {
  if (unsubscribe !== null) {
    unsubscribe()
  }
};

export const signIn = (...args) => dispatch => {
  return firebase.auth().signInWithEmailAndPassword(...args)
};

export const signInGoogle = (...args) => dispatch => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export const signInFacebook = (...args) => dispatch => {
  return firebase.auth().signInWithEmailAndPassword(...args)
};

export const signUp = (email, password, other) => dispatch => {
  return firebase.auth().createUserWithEmailAndPassword(
    email,
    password
  ).then(
    user => firebase.database().ref('/users/' + user.uid).set(other)
  )
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'auth/SET_USER':
      return {
        user: action.user
      };
    default:
      return state
  }
}