<template>
  <div class="main">
    <h1>ToDoList With Vue.Js!</h1>
    <p>💻 Vue.js로 만든 ToDoList입니다! 💻</p>
    <p>📝 내가 해야할 일을 추가해보세요 📝</p>
    <p>❌ 할 일을 했거나 잘못 작성했다면 삭제도 할 수 있어요 ❌</p>
    <p>💥 전체 삭제도 가능! 💥</p>
    <p>👇 지금 작성하러 가기 👇</p>
    <button class="start" v-on:click="movePage"> 시작하기 </button>
  </div>
</template>

<script>

export default {
  methods: {
    movePage() {
      this.$router.push('todolist')
    }
  }
}

</script>

<style lang="scss">
  button {
    margin-left: 5px;
    background-color: black;
    color: white;
  }

  button:hover {
    background-color: white;
    color: black;
  }

  .start {
     height: 50px;
     width: 100px;
  }
</style>