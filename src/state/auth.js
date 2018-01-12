import firebase from 'firebase'

const initialState = {
  user: null
};


export const signIn = (...args) => dispatch => {
  return firebase.auth().signInWithEmailAndPassword(...args)
};

export const signUp = (email, password) => dispatch => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'auth/SET_USER':
      return {
        user: action.user
      };
    default:
      return state
  }
}