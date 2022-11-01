<template class="corpo">
    <div>
        <div class="field">
            <div class="form-login">
                <div class="logo">
                    <span>
                        <i class="bi bi-graph-up"></i>
                    </span>
                    <label for="">
                        TaskFlow
                    </label>
                </div>
                <form action="home" >
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-person-fill"></i>
                        </span>
                        <input type="email" class="form-control" placeholder="E-mail" v-model="userEmail">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-lock-fill"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Senha" v-model="userPassword">
                    </div>
                    <button class="btn btn-primary btn-submit" @click="fuc">Entrar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import router from '../router';

    export default{
    name: "Login",
    components: { 
        Navbar 
    },
    data(){
        return{
            userEmail: null,
            userPassword: null,
        }
    },
    methods: {
        async func(){
            
            const userDB = await this.buscaLoginUser()
            
            // if(!this.userEmail || this.userEmail == null || this.userEmail == ''){
            //     console.log('email incorreto');               
            // }else if(this.userEmail == this.userDB.user){
            //     if(!this.userPassword || this.userPassword == null || this.userPassword == ''){
            //         console.log('Senha incorreta!');
            //     }else if(this.userPassword == this.userDB.password){
            //         // router.push({name: 'home'})
            //     }
            //     console.log('Algum erro!')
            // }else{
            //     console.log('AAA')
            // }
        },
        async buscaLoginUser(){
            const req = await fetch("http://localhost:5000/user")
            const data = await req.json()
            // console.log(data);
            return data
            // this.user = data.user
            // this.pass = data.password
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
    margin:  10em auto;
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