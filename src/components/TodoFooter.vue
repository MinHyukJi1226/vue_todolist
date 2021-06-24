<!-- /src/Components/TodoFooter.vue -->

<template>
    <div>
        <button type="button" v-on:click="clearTodo">전체삭제</button>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo(){
            this.$emit('removeAll');
        }    
    }
}
</script>