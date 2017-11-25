<template>
  <div id="app">
    <navbar></navbar>
    <!-- <router-view/> -->
    <home></home>
    <about></about>
    <policy></policy>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Policy from '@/components/Policy'
export default {
  name: 'app',
  components : {
    Navbar,
    Home,
    About,
    Policy
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Mitr:300,400,500,600,700');
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Mitr', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
