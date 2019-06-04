<template>
  <div class="login-background">
  </div>
</template>

<style>
.login-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
    url("/images/login-background.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 0;
  transition: opacity 700ms;

  min-height: 100%;
}
</style>

