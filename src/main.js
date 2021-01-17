import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAl2a0Bvp0G60-z1P28mHNLydB-yJLtFrY",
  authDomain: "facebook-bbbb5.firebaseapp.com",
  projectId: "facebook-bbbb5",
  storageBucket: "facebook-bbbb5.appspot.com",
  messagingSenderId: "302471749296",
  appId: "1:302471749296:web:a8134a997ecc2a8c60e575",
  measurementId: "G-KWB57HY3RP"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('updatedUser', {user});
  }
  createApp(App).use(store).use(router).mount('#app')
});
