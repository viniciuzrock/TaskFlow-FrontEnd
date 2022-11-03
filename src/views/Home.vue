<template>
  <div class="body">
        <sidebar/>
        <div class="side">
            <h1>Início</h1>
        </div>
        
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
  export default{
  components: { Sidebar },
    name:"Home",
    data(){
      return{
      }
    },
    methods:{
    },
    mounted(){
    }
  }
</script>

  <style scoped>    
  .body{
    display: flex;
  }
  .side{
    width: 400px;
  }
</style>