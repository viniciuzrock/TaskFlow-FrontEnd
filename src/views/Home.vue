<template>
  <div>
    aaaaa
    <!-- Assss
    <label for="user">Usuário</label>
    <input type="text" name="user" v-model="user">{{user}}
    <label for="password">Senha</label>
    <input type="text" name="password" v-model="pass" >{{pass}} -->
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

          const req = await fetch("http://localhost:5000/user")
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