<template>
  <div>
    <p>TAGで絞り込む : <input v-model="query" type="search" autocomplete="off" /></p>
    <div v-for="article in articles" :key="article.title">
      <ul>
        <li>
          <nuxt-link :to="article.path">{{ article.title }} : TAGS: {{ article.tags }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  data() {
    return {
      query: '',
      articles: [],
    }
  },
  created: async function() {
    // @ts-ignore
    this.articles = await this.$content('articles').sortBy('date', 'desc').fetch()
  },
  watch: {
    async query(query) {
      if (!query) {
        // @ts-ignore
        this.articles = await this.$content('articles').sortBy('date', 'desc').fetch()
        return
      }
      // @ts-ignore
      this.articles = await this.$content('articles').where({ tags: { $contains: query }}).fetch()
    }
  },
})
</script>

<style>
</style>
