<template>
  <div>
    <p>TAGで絞り込む : <input v-model="query" type="search" autocomplete="off" /></p>
    <p>TAG一覧</p>
    <div v-for="article in articles" :key="article.title">
      <ul>
        <li>
          <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
          <div class="article-detail">
            <div>- DATE: {{ $convertDate(String(article.date)) }}</div>
            <div>- TAGS:
            <span v-for="tag in article.tags" :key="tag">
              <button v-on:click="searchTag(`${tag}`)" class="tag-button"><u>{{ tag }}</u></button>
            </span>
            </div>
          </div>
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
  methods: {
    searchTag: function(label: string) {
      this.query = label
    }
  },
})
</script>

<style lang="sass">
.article-detail 
  font-size: 0.85em


.tag-button 
  border: none
  outline: none
  background: transparent
</style>
