<template>
  <div id="app">
    <h3 id="time" @click="outputDate">{{new Date().toLocaleString()}}</h3>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contacts">Contacts</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    console.log('beforeCreate', document.querySelector('#nav'))
  },
  created () {
    console.log('created', document.querySelector('#nav'))
  },
  mounted () {
    console.log('mounted', document.querySelector('#nav'))
  },
  methods: {
    outputDate () {
      console.log(new Date().toLocaleString())
    }
  }
}
</script>

<style lang="scss">
// 注意这里没有使用@import
// 全局font-size: 20px;
// 变量$text-color、$theme-color
// 和button()的mixin是借助sass-resources-loader实现的
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $text-color;
    &.router-link-exact-active {
      color: $theme-color;
    }
  }
}
#time{
  @include button();
}
</style>
