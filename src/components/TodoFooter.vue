<!-- /src/Components/TodoFooter.vue -->

<template>
    <div class="footer">
        <button type="button" v-on:click="clearTodo">전체삭제</button>
        <div>
            <button class="moveMainBtn" type="button" v-on:click="moveMain">홈으로</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo(){
            this.$emit('removeAll');
        },
        moveMain(){
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">

.moveMainBtn {
    background-color: skyblue;
    margin-top: 10px;
}

</style>