<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo">추가</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo(){
            //빈값체크
            if(this.newTodoItem !== ''){
                var value = this.newTodoItem && this.newTodoItem.trim();  //입력된 텍스트의 앞, 뒤 공백문자열 제거
                this.$emit('addTodo', value); // 이벤트 전달
                this.clearInputbox(); // 초기화
            }
        },
        clearInputbox(){  
            this.newTodoItem = '';
        }
    }
}
</script>