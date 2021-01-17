<template>
  <main class="header" v-if="isSigned">
    <div class="header-left">
      <img
        src="https://vtpkb4cbz742mpwjg43ich01-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Facebook-Logo.png"
        alt=""
        class="icon"
      />
      <div class="header-input">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/483/483356.svg?token=exp=1610466305~hmac=ceff5f808a2aea70a61386b696dabcbb"
          alt=""
          style="width: 20px; padding: 0px 5px"
        />
        <input type="text" placeholder="Search Facebook" />
      </div>
    </div>
    <div class="header-middle">
      <div class="header-option">
        <img
          class="header-active"
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/3895539931556258249-512.png"
          alt=""
        />
      </div>
      <div class="header-option">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/17954008861561029441-512.png"
          alt=""
        />
      </div>
      <div class="header-option">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/7305214171556273575-512.png"
          alt=""
        />
      </div>
      <div class="header-option">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/9334811021535694871-512.png"
          alt=""
        />
      </div>
      <div class="header-option">
        <img
          src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/3895539931556258249-512.png"
          alt=""
        />
      </div>
    </div>
    <div class="header-right">
      <div class="header-info">
        <img
          :src="user.photoURL"
          alt=""
          class="icon-profile"
          style="width: 30px; border-radius: 50%"
        />
        <h4>{{ user.displayName }}</h4>
      </div>
      <img
        src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/4413922431556277115-512.png"
        alt=""
        class="icon icon-right"
      />
      <img
        src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/16908487151582799501-512.png"
        alt=""
        class="icon icon-right"
      />
      <img
        src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/13252117381571183079-512.png"
        alt=""
        class="icon icon-right"
      />
      <img
        src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/13729076041556280999-512.png"
        alt=""
        class="icon icon-right"
      />
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import store from "../store";

export default {
  setup() {
    let user = ref();
    let isSigned = ref(false);

    onMounted(() => {
      if (store.state.isSigned) {
        user.value = store.state.user.user;
        isSigned.value = store.state.isSigned;
      }
    });

    return {
      isSigned,
      user,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "montserrat", sans-serif;
}
.header {
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px black;
}
.header-left {
  display: flex;
  justify-content: space-evenly;
}
.header-input {
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  border-radius: 999px;
  height: 30px;
  width: 200px;
  margin-top: 5px;
  margin-left: 5px;
}
.header-left > img {
  width: 40px;
  height: 40px;
  text-align: center;
  margin-top: 10px;
}
.header-input > input {
  border: none;
  background-color: transparent;
  outline-width: 0;
  font-size: 1rem;
}
.header-option > img {
  width: 30px;
  padding: 10px 15px;
}
.icon {
  width: 25px;
  height: 25px;
  padding: 0 2px;
  cursor: pointer;
}
.icon-profile {
  width: 30px;
  margin-right: 10px;
}
.icon-right {
  margin: 0 10px;
}
.header-middle {
  display: flex;
  flex: 1;
  justify-content: center;
}
.header-option {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 0px 10px;
  cursor: pointer;
}
.header-option:hover {
  background: #eff2f5;
  border-radius: 10px;
}
.header-info {
  display: flex;
  align-items: center;
}
.header-info > h4 {
  margin-right: 15px;
}
.header-right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-active {
  border-bottom: 4px solid #2e81f4;
}
</style>