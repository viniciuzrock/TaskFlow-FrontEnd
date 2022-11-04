<template class="corpo">
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
                    <label for="">TaskFlow</label>
                </div>
                <form class="form-container" @submit.prevent="register">
                <!-- <div class="form-container"> -->
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-person-fill"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Nome" 
                            v-model="form.name" 
                            minlength="4">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-envelope-paper-fill"></i>
                        </span>
                        <input type="email" class="form-control" placeholder="E-mail"
                            v-model="form.email"
                            autocomplete="no">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-unlock-fill"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Senha" 
                            v-model="form.password">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text iconLogin" id="basic-addon1">
                            <i class="bi bi-lock-fill"></i>
                        </span>
                        <input type="password" class="form-control" placeholder="Confirme a Senha" 
                            v-model="form.confirmPassword">
                    </div>
                    <!-- OCULTAR SENHAS
                    <i class="bi bi-eye-fill"></i> - olho aberto
                    <i class="bi bi-eye-slash-fill"></i> - olho fechado -->
                    <button type="submit" class="btn btn-primary btn-submit">Cadastrar</button>
                    <!-- <button class="btn btn-primary btn-submit" @click="register">Cadastrar</button> -->
                <!-- </div> -->
            </form>
            </div>
        </div>
</template>

<script>
import router from '../router';
    export default{
    name: "Login",
    data(){
        return{
            erro:false,
            form:{
                name: null,
                password: null,
            },
            userEmail: null,
            userPassword: null,
        }
    },
    methods: {
        async register(){
            console.log(this.form)
            if(this.form.password != this.form.confirmPassword){
                this.erro='Senhas não conferem.'
                    setTimeout(()=>{
                    this.erro = false
                    },2000)
            }
            const userDataLogin = {
                userName: this.form.name,
                userEmail: this.form.email,
                userPassword: this.form.confirmPassword
            }
            
            try {
            const dataJson = JSON.stringify(userDataLogin)
                const req = await fetch("http://localhost:5000/users",{
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body:dataJson
                })
                
                const res = await req.json()
                console.log(res)

            } catch (error) {
                console.log('AAAAAAA');
                console.log(error);
            }
            // router.push({name: 'home'})
            console.log('ZZZZZZ');
            console.log(req);
        }
    },
    components: { 

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
        padding: 30px;
    }
</style>