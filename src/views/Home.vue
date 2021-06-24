<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Main.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>