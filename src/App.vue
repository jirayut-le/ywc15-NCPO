<template>
  <div id="app">
    <navbar></navbar>
    <!-- <router-view/> -->
    <home></home>
    <about></about>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
export default {
  name: 'app',
  components : {
    Navbar,
    Home,
    About
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
