<template>
  <div id="app">
    <vuePassinput id="paypass" :paypassHave="paypassHave" v-on:chagePass="chagePass" linecolor="#333333"></vuePassinput>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      paypassHave: ''
    }
  },
  methods:{
    chagePass(value){
      console.log(value)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
