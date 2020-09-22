<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer,
  }
})
</script>

<style>
  html {
    background-color: silver;
  }
</style>
