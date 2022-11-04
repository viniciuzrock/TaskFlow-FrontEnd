<template>

    <div class="mont">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Loading'
    }
</script>

<style scoped>
    .mont{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 65vh;
    }
</style>