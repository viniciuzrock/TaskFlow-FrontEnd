<template class="corpo">
    <!-- <div> -->
        <div class="field">
            <!-- aaaaa -->
            <div class="form-login">
                <div class="logo">
                    <span>
                        <i class="bi bi-graph-up"></i>
                    </span>
                    <label for="">
                        TaskFlow
                    </label>
                </div>
                <form action="home" method="post" >
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-person-fill"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Nome"  >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-person-fill"></i>
                        </span>
                        <input type="email" class="form-control" placeholder="E-mail"  >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-lock-fill"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Senha" >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-lock-fill"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Confirme a Senha" >
                    </div>
                    <button type="submit" class="btn btn-primary btn-submit" @click="func">Entrar</button>
                </form>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import Navbar from '../components/Navbar.vue';

    export default{
    name: "Login",
    methods: {
        func(){
            router.push({name: 'home'})
        }
    },
    components: { 
        Navbar 
    }
}
</script>

<style scoped>


    
    .field {
        padding: auto;
        transition: .5s;
        width: 100%;
        height: 65vh;

    }

    .logo{
        display: flex;
        flex-direction: row;
        justify-content:center;
        margin: 1em;
    }

    .logo span{
        font-size: 30px;
        margin: 5px;
        color: blue;
    }

    .logo label{
        margin: 5px;
        font-size: 30px;
        font-weight:600;
    }
   .form-login{
    border: solid 1px #CED4DA;
    border-radius: 8px;
    padding: 2px;
    margin:  5em auto;
    max-width: 25em;
    /* box-shadow: 1px 1px 1px 1px #000; */
   }
   .form-login form{
    margin: auto;
    max-width: 20em;
   }

   .input-group span{
    padding: 0;
   }
   .input-group input{
    animation: none;
   }
   .iconLogin i{
    width: 30px;
    font-size: 30px;
   }    

   .btn-submit{
    width: 20em;
    margin-bottom: 15px;
   }
</style>