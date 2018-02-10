<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Vue 0203</h1>
    <p>
      <router-link to="/helloworld">Example 1</router-link>
      <router-link to="/vbind">Example 2</router-link>
      <router-link to="/vhtml">Example 3</router-link>
      <router-link to="/EventHandling">Example 4</router-link>
      <router-link to="/KeyboardEvent">Example 5</router-link>
      <router-link to="/Computed">Example 6</router-link>
      <router-link to="/Watch">Example 7</router-link>
      <router-link to="/Style">Example 8</router-link>
      <router-link to="/VIf">VIf</router-link>
      <router-link to="/VFor">VFor</router-link>
      <router-link to="/MonsterSlayer">MonsterSlayer</router-link>
      <router-link to="/Pratice">Pratice</router-link>
    </p>

    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
