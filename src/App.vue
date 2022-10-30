
<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
    <login/>
    <!-- <home/> -->
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Login from './views/Login.vue';
  export default{
    components: { 
      Home,
        Login 
    },
    data(){
      return{
        
      }
    }
  }
</script>

<style scoped>

</style>
