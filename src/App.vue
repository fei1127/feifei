<template>
  <div id="app">
    <diancan></diancan>
    <router-view/>
    

</div>




</template>

<script>
import diancan from '@/components/diancan'
export default {
  name: 'App',
  components:{diancan:diancan

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
