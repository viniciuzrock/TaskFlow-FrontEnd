<template>
    <div>
        <div class="body-list">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="list-perfil">
                        <i class="bi bi-person-circle"></i>
                        <label for="">UserName</label>
                    </div>
                </li>
                <li class="list-group-item" id="home" @click="marcaItem()">
                    <router-link to="/home">
                        <div>
                            <i id="homeIcon" class="bi bi-house-fill"></i>
                            <label id="homeLabel">Página Inicial</label>
                        </div>
                    </router-link>
                </li>
                <li class="list-group-item" id="task" @click="marcaItem()">
                    <router-link to="/tarefas">
                        <div>
                            <i id="taskIcon" class="bi bi-list-check"></i>
                            <label id="taskLabel" for="">Minhas tarefas</label>
                        </div>
                    </router-link>
                </li>
                <li class="list-group-item" id="report" @click="marcaItem()">
                    <router-link to="/relatorios">
                        <div>
                            <i id="reportIcon" class="bi bi-clipboard2-data-fill"></i>
                            <label id="reportLabel">Relatórios</label>
                        </div>
                    </router-link>
                </li>
                <li class="list-group-item" id="config" @click="marcaItem()">
                    <router-link to="/configuracoes">
                        <div>
                            <i id="configIcon" class="bi bi-gear-wide-connected"></i>
                            <label id="configLabel">Configurações</label>
                        </div>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <router-link to="/">
                        <div>
                            <i class="bi bi-power"></i>
                            <label for="">Logout</label>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>    
</template>
<script>
    export default{
        methods:{
            marcaItem(){
                if(this.$route.name == "home"){
                    document.getElementById("home").style.backgroundColor = "#0A58CA"
                    document.getElementById("homeLabel").style.color = "#FFFFFF"
                    document.getElementById("homeIcon").style.color = "#FFFFFF"
                }
                if(this.$route.name == "tarefas"){
                    document.getElementById("task").style.backgroundColor = "#0A58CA"
                    document.getElementById("taskLabel").style.color = "#FFFFFF"
                    document.getElementById("taskIcon").style.color = "#FFFFFF"
                }
                if(this.$route.name == "relatorios"){
                    document.getElementById("report").style.backgroundColor = "#0A58CA"
                    document.getElementById("reportLabel").style.color = "#FFFFFF"
                    document.getElementById("reportIcon").style.color = "#FFFFFF"
                }
                if(this.$route.name == "configuracoes"){
                    document.getElementById("config").style.backgroundColor = "#0A58CA"
                    document.getElementById("configLabel").style.color = "#FFFFFF"
                    document.getElementById("configIcon").style.color = "#FFFFFF"
                }
                return  
            }
        }
    }
</script>
<style scoped>

    .body-list{
        max-width:15em;
        min-width: 15em;
    }
    .list-group{
        border-right: #0A58CA 5px solid;
        height: 100vh;
    }
    .list-group-item{
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border: none;
        text-decoration: none;
    }
    .list-group-item:hover{
        background-color: rgb(233, 233, 233);
        cursor: pointer;
    }
    .list-group-item:hover,
    .list-group-item div:hover,
    .list-group-item div label:hover{
        cursor: pointer;
    }
    .list-group-item_focus{
        background-color: #0A58CA;
        color: #fff;
    }
    .list-group-item i{
        font-size: 1.5em;
    }
    .list-group-item label{
        text-align: center;
        margin: auto 1em;
        justify-content: center;
    }

    .list-perfil{
        display: flex;
        flex-direction: column;
        padding: auto;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid rgba(194, 194, 194, 0.953);
    }
    .list-perfil i{
        font-size: 9em;
        margin: 0;
        height: 1.3em;
    }
    .list-perfil i::before{
        vertical-align: 0;
    }
</style>