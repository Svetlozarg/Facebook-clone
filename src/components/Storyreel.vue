<template>
  <div class="storyreel">
    <div class="story">
      <div class="story-box">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1610467455~hmac=61ac21e915cac9fac6622d95e8768676"
          class="sidebarIcon"
          style="width: 30px"
        />
        <h4>Name Name</h4>
      </div>

      <div class="story-box">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1610467455~hmac=61ac21e915cac9fac6622d95e8768676"
          class="sidebarIcon"
          style="width: 30px"
        />
        <h4>Name Name</h4>
      </div>

      <div class="story-box">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1610467455~hmac=61ac21e915cac9fac6622d95e8768676"
          class="sidebarIcon"
          style="width: 30px"
        />
        <h4>Name Name</h4>
      </div>

      <div class="story-box">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1610467455~hmac=61ac21e915cac9fac6622d95e8768676"
          class="sidebarIcon"
          style="width: 30px"
        />
        <h4>Name Name</h4>
      </div>

      <div class="story-box">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1610467455~hmac=61ac21e915cac9fac6622d95e8768676"
          class="sidebarIcon"
          style="width: 30px"
        />
        <h4>Name Name</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.story {
  display: flex;
  flex-direction: row;
}
.story-box {
  background: url("https://i.pinimg.com/originals/ee/26/8f/ee268f7e334f70a476924cfd483dd27b.jpg");
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 120px;
  height: 200px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin-right: 10px;
  transition: transform 100ms ease-in;
  cursor: pointer;
}
.story-box:hover {
  transform: scale(1.07);
}
.story-box > img {
  margin: 10px;
  border-radius: 50%;
  border: 5px solid #2e81f4;
}
.story-box > h4 {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
}
</style>