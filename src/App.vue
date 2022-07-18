<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div></div>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/About">About</router-link>
    <router-view />
    <div></div>




    <!-- <button @click="$store.commit('SetCounter')">点我</button>
    {{ $store.state.counter }}
    <button @click="$store.dispatch('addCounter')">异步点我</button> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
