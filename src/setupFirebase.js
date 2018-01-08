import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAkVekVE80S1geyyLg2FzZe_vjkC25Nk9w",
  authDomain: "budget-app-brodacze-group.firebaseapp.com",
  databaseURL: "https://budget-app-brodacze-group.firebaseio.com",
  projectId: "budget-app-brodacze-group",
  storageBucket: "budget-app-brodacze-group.appspot.com",
  messagingSenderId: "284040962744"
};

export default () => {
firebase.initializeApp(config);
}