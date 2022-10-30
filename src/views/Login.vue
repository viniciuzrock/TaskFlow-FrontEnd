<template class="corpo">

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
            <form action="home" method="post" >
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
                <button type="submit" class="btn btn-primary btn-submit">Entrar</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        name:"Login",
        methods:{

        }
    }
</script>

<style scoped>
    .field {
        padding: auto;
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