<template>
    <h1>test component</h1>
    <h2>{{ message }}</h2>
</template>

<script>
export default {
    name: 'TestOne',
    data(){
        return{
            message: 'she sells the sea shells'
        }
    }
}
</script>