<template>
    <div id="nav">
        <router-link to="/">Entrar</router-link> |
        <router-link to="/cadastro">Cadastre-se</router-link>
    </div>
</template>
    
<script>
    export default{
        name: "Navbar",
        // props: ["logo","alt"]
    }
</script>

<style scoped>
    #nav{
        background-color: transparent;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    #nav a{

        text-decoration: none;
        margin: 12px;
    }

</style>