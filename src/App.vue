<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
    <h2>Karlie kan säga det svenska alfabetet nu</h2>

  <router-view/>
  </div>
</template>

<script>
import lines from './components/skills.vue'

export default {
  name: 'app',
  components: {
    lines
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #C6D2DA;
  border-radius: 3px;
  color: #56738C;
  font-weight: bold;
  margin-right: 15px;
}
</style>
