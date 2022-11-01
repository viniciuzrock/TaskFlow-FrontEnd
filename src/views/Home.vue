<template>
  <div>
    TELA PRINCIPAL
    <button @click="buscaUser">
      A
    </button>
  </div>
</template>

<script>
  export default{
    name:"Home",
    data(){
      return{
        user: null,
        pass: null
      }
    },
    methods:{
      async buscaUser(){
        try {

          // const req = await fetch("http://localhost:5000/user");
          const data = await req.json()
          console.log(data);
          this.user = data.user
          this.pass = data.password
        } catch (error) {
          console.log(error);
        }
      }
    },
    mounted(){
      // this.buscaUser()
    }
  }
</script>

<style scoped>

</style>