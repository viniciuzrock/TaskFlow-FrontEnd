<template>
    <div class="body">
        <sidebar/>
        <div class="side">

            <h1>Configurações</h1>
        </div>
        
    </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
    export default{
        components: { Sidebar },
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
    .body{
        display: flex;
    }
    .side{
        /* background: red; */
        width: 400px;
    }
</style>