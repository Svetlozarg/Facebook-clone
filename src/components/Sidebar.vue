<template>
  <div class="sidebar">
    <div class="sidebar-row" v-if="isSigned">
      <div class="sidebar-box">
        <img
          :src="user.photoURL"
          class="sidebarIcon"
          style="
            width: 40px;
            margin-top: 10px;
            height: 40px;
            border-radius: 50%;
          "
        />
        <h4>{{ user.displayName }}</h4>
      </div>
      <div class="sidebar-box">
        <img
          class="sidebarIcon"
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/15630972771578287701-512.png"
          alt=""
        />
        <h4>COVID-19 Information Center</h4>
      </div>
      <div class="sidebar-box">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/17954008861561029441-512.png"
          alt=""
          class="sidebarIcon"
        />
        <h4>Pages</h4>
      </div>
      <div class="sidebar-box">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/7364060301582634778-512.png"
          alt=""
          class="sidebarIcon"
        />
        <h4>Friends</h4>
      </div>
      <div class="sidebar-box">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/16908487151582799501-512.png"
          alt=""
          class="sidebarIcon"
        />
        <h4>Messenger</h4>
      </div>
      <div class="sidebar-box">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/820169231582962155-512.png"
          alt=""
          class="sidebarIcon"
        />
        <h4>Marketplace</h4>
      </div>
      <div class="sidebar-box">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/18287647551537356166-512.png"
          alt=""
          class="sidebarIcon"
        />
        <h4>Videos</h4>
      </div>
      <div class="sidebar-box" @click="logout()">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/11600322591535351491-512.png"
          alt=""
          class="sidebarIcon"
        />
        <h4>Logout</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import firebase from "firebase";
import store from "../store";
import router from "../router";

export default {
  setup() {
    let token = ref();
    let user = ref();
    let isSigned = ref(false);

    onMounted(() => {
      if (store.state.isSigned) {
        user.value = store.state.user.user;
        isSigned.value = store.state.isSigned;
      } else {
        router.push("/login");
      }
    });

    function logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          token.value = {};
          user.value = {};
          isSigned.value = false;
          store.commit("clearUser");
          sessionStorage.clear();
          window.localStorage.clear();
          router.push("/login");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    return {
      logout,
      isSigned,
      user,
    };
  },
};
</script>

<style>
.sidebar-row {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 10px;
  cursor: pointer;
}
.sidebar-box {
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.sidebar-box:hover {
  background-color: lightgray;
  border-radius: 10px;
}
.sidebar-box > h4 {
  margin-left: 20px;
  font-weight: 600;
}
.sidebarIcon {
  width: 30px;
  height: 30px;
}
</style>