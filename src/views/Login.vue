<template>
  <main>
    <div class="login">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
        alt=""
      />
      <h1>Facebook Clone</h1>
      <h4>By Svetlozar Georgiev</h4>
      <button @click="logInWithGoogle">Sign In</button>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import firebase from "firebase";
import router from "../router";
import store from "../store";

export default {
  setup() {
    let token = ref();
    let user = ref();
    let isSigned = ref(false);

    onMounted(() => {
      if (store.state.isSigned) {
        user.value = store.state.user.user;
        isSigned.value = store.state.isSigned;
        router.push("/");
      }
    });

    function logInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      isSigned.value = false;
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(async (result) => {
          token.value = result.credential.accessToken;
          user.value = result.user;
          isSigned.value = true;
          router.push("/");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    return {
      logInWithGoogle,
    };
  },
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
}
.login > img {
  object-fit: contain;
  height: 150px;
}
.login > button {
  width: 250px;
  height: 35px;
  background-color: #2e81f4;
  color: #eff2f5;
  font-weight: 800;
  cursor: pointer;
  margin-top: 5rem;
}
.login > button:hover {
  background-color: #2e73f491;
  color: black;
}
</style>