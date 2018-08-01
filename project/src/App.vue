<template>
    <div id="app">
        <NavbarComponent/>
        <router-view></router-view>
    </div>
</template>
<script>
import NavbarComponent from "./components/NavbarComponent"

export default {
    components: {
        NavbarComponent
    }
}
</script>
<style>
    #app{
        margin : 0px 100px 100px 100px;
    }
</style>
