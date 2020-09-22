<template>
  <div>
    {{ article.title }}
    <nuxt-content :document="article" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    // @ts-ignore
    const article = await $content(`articles/${ params.slug }`).fetch()

    return {
      article
    }
  }
})
</script>

<style>
</style>
