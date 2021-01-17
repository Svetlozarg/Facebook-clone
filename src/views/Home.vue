<template>
  <main v-if="isSigned">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Feed -->
    <div class="feed">
      <Storyreel />

      <div class="message-box">
        <div class="message-box-top">
          <img :src="user.photoURL" style="width: 50px; border-radius: 50%" />
          <form>
            <input
              class="message-input"
              placeholder="What's on your mind"
              v-model="text"
            />
            <input
              class="message-input"
              placeholder="Image URL (Optional)"
              style="width: 150px"
              v-model="imageURL"
            />
            <button type="submit" @click.prevent="submitMessage">
              Hidden Submit
            </button>
          </form>
        </div>
        <div class="message-box-bottom">
          <div class="message-box-option">
            <img
              class="icon-feed"
              src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/17732351801537356165-512.png"
              alt=""
            />
            <h3>Live Vide</h3>
          </div>
          <div class="message-box-option">
            <img
              class="icon-feed"
              src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/11127254001554373165-512.png"
              alt=""
            />
            <h3>Photo/Video</h3>
          </div>
          <div class="message-box-option">
            <img
              class="icon-feed"
              src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/19891224741559033189-512.png"
              alt=""
            />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
      <div class="post" v-for="post in posts" :key="post.id">
        <div class="post-top">
          <img
            style="width: 40px; border-radius: 50%; margin-right: 10px"
            class="post-avatar"
            :src="user.photoURL"
            alt=""
          />
          <div class="post-top-info">
            <h3>{{ post.username }}</h3>
            <!-- <p>{{ new Date(post.timestamp.toDate()) }}</p> -->
          </div>
        </div>

        <div class="post-bottom">
          <p>{{ post.message }}</p>
        </div>

        <div class="post-image">
          <img :src="post.image" alt="" />
        </div>

        <div class="post-options">
          <div class="post-option">
            <img
              class="icon-post"
              src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/13324111911553666145-512.png"
              alt=""
            />
            <p>Like</p>
          </div>

          <div class="post-option">
            <img
              class="icon-post"
              src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/11176394641560146801-512.png"
              alt=""
            />
            <p>Comment</p>
          </div>

          <div class="post-option">
            <img
              class="icon-post"
              src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/11930121041540882615-512.png"
              alt=""
            />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
    <Widgets />
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import store from "../store";
import router from "../router";
import firebase from "firebase";
import Sidebar from "../components/Sidebar";
import Storyreel from "../components/Storyreel";
import Widgets from "../components/Widgets";

export default {
  setup() {
    let user = ref();
    let isSigned = ref(false);

    let text = ref("");
    let imageURL = ref("");

    let posts = ref();

    onMounted(() => {
      if (store.state.isSigned) {
        user.value = store.state.user.user;
        isSigned.value = store.state.isSigned;

        let db = firebase.firestore();
        let postsArray = [];

        db.collection("posts")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
              postsArray.push(doc.data());
            });
            posts.value = postsArray;
          });
      } else {
        router.push("/login");
      }
    });

    function submitMessage() {
      if (text.value != "") {
        let db = firebase.firestore();

        db.collection("posts")
          .add({
            message: text.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.value.photoURL,
            username: user.value.displayName,
            image: imageURL.value,
          })
          .then(() => {
            console.log("Posts is successfully uploaded");
            window.location.reload();
          });

        text.value = "";
        imageURL.value = "";
      } else {
        console.log("Posts message is empty");
      }
    }

    return {
      Sidebar,
      Storyreel,
      Widgets,
      submitMessage,
      isSigned,
      user,
      text,
      imageURL,
      posts,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f1f2f5;
}
main {
  display: flex;
  flex-direction: row;
}
.feed {
  flex: 1;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.message-box {
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  width: 100%;
}
.message-box-top {
  display: flex;
  border-bottom: 1px solid #eff2f5;
  padding: 15px;
  justify-content: center;
  margin: 0 auto;
}
.message-box-top > form {
  flex: 1;
  display: flex;
}
.message-box-top > form > input {
  outline-width: 0;
  border: none;
  padding: 5px 20px;
  margin: 0 10px;
  border-radius: 999px;
  background-color: #eff2f5;
}
.message-box-top > form > button {
  display: none;
}
.message-input {
  float: 1;
  width: 300px;
  font-size: 0.9rem;
  text-transform: capitalize;
}
.message-box-bottom {
  display: flex;
  justify-content: space-evenly;
}
.message-box-option {
  padding: 20px;
  display: flex;
  align-items: center;
  color: grey;
  margin: 5px;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.1s ease-in;
}
.message-box-option:hover {
  background-color: rgba(211, 211, 211, 0.534);
  color: black;
}
.icon-feed {
  width: 30px;
  margin-right: 10px;
}
.icon-post {
  width: 20px;
  margin-right: 10px;
}
.post {
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
}
.post-top {
  display: flex;
  position: relative;
  align-items: center;
  padding: 15px;
}
.psot-avatar {
  margin-right: 10px;
}
.post-top-info > h3 {
  font-size: medium;
  margin: 0;
  margin-bottom: 3px;
}
.post-top-info > p {
  margin: 0;
  margin-top: 3px;
  font-size: small;
  color: gray;
}
.post-bottom {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
}
.post-image > img {
  width: 100%;
}
.post-options {
  padding-top: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
  font-size: medium;
  color: gray;
  cursor: pointer;
  padding: 15px;
}
.post-option {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  flex: 1;
  transition: 0.2s;
}
.post-option:hover {
  background-color: lightgray;
  color: black;
}
</style>
