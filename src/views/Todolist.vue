<template>
    <div class="todolist">
        <TodoHeader></TodoHeader>
        <TodoInput v-on:addTodo="addTodo"></TodoInput>
        <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
        <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoFooter from '@/components/TodoFooter';

export default {
    data(){
        return {
            todoItems: []
        }
    },
    created() {
      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) != "loglevel:webpack-dev-server")
            this.todoItems.push(localStorage.key(i));
        }
      }
    },
    methods: {
        addTodo(todoItem){
            //로컬스토리지에 데이터를 추가하는 로직
            localStorage.setItem(todoItem, todoItem);
            this.todoItems.push(todoItem);
        },
        removeTodo(todoItem, index){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        clearAll(){
            //로컬스토리지 전체 삭제, todoItems 초기화
            localStorage.clear();
            this.todoItems = [];
        }
    },    
    components: {
        'TodoHeader': TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>