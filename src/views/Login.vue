<template class="corpo">
    <div>
        <div class="field">
            <div class="alert alert-danger" role="alert" v-if="erro">
                <i class="bi bi-exclamation-triangle-fill"></i>
                {{erro}}
            </div>
            <div class="form-login">
                <div class="logo">
                    <span>
                        <i class="bi bi-graph-up"></i>
                    </span>
                    <label for="">
                        TaskFlow
                    </label>
                </div>
                <form class="form-container" @submit.prevent="login">
                <!-- <div class="form-container"> -->
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-envelope-paper-fill email"></i>
                        </span>
                        <input type="email" class="form-control" placeholder="E-mail" 
                            v-model="form.userEmail"
                            required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-lock-fill"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Senha" 
                            v-model="form.userPassword"
                            required >
                    </div>
                    <!-- <button class="btn btn-primary btn-submit" @click="login">Entrar</button> -->
                    <button type="submit" class="btn btn-primary btn-submit">Entrar</button>
                    <!-- SALVAR USUARIO NA PROXIMA ROTA -->
                <!-- </div> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router';
    export default{
        components: {  },
        
        name: "Login",
        data(){
            return{
                form:{
                    userEmail: null,
                    userPassword: null,
                },
                erro:false,
            }
        },
        methods: {
            async login(){
                // e.preventDefault()
                const userDB = await this.buscaLoginUser()
                console.log(this.userId);
                if(this.form.userEmail == userDB.user){ 
                    if(this.form.userPassword == userDB.password){
                        console.log(this.form);
                        router.push({name: 'home', params: { homeUser: this.form.userEmail}})
                    }else{
                        this.erro='Senha inválida!'
                        setTimeout(()=>{
                        this.erro = false
                        },3000)
                    }
                }else{
                    this.erro='Email inválido!'
                    setTimeout(()=>{
                        this.erro = false
                    },3000)
                }
            },
            async buscaLoginUser(){
                const req = await fetch("http://localhost:5000/user")
                const data = await req.json()
                return data
            }
        },
        mounted(){
            // this.buscaLoginUser()
        }
    }
</script>

<style scoped>
    .field {
        padding: auto;
        transition: .5s;
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
    margin:  7em auto;
    max-width: 25em;
   }
   .form-login .form-container{
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
    font-size: 20px;
   }    
   .iconLogin i .email{
    width: 10px;
    font-size: 10px;
   }    

   .btn-submit{
    width: 20em;
    margin-bottom: 15px;
   }

    .alert{
        position: absolute;
        top: 0;
        right: 0;
        margin: 20px ;
        margin-bottom: 0rem;
        padding: 20px 30px;
        display: flex;
        flex-direction:row;
        justify-content: space-between;
    }
    .alert i{
        margin-right: 0.9em;
    }
</style>