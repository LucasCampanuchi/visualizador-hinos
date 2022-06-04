<template>
  <HomePage/>
</template>

<script>
import { defineComponent } from 'vue'
import HomePage from './HomePage/view/HomePage.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HomePage
  }

})
</script>
