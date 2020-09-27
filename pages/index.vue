<template>
  <div>
    <div>
      TAGで絞り込む : <input v-model="query" type="search" autocomplete="off" />
    </div>
    <div>
      TAG一覧:
      <span v-for="tag in viewTagsUnique(articles)" :key="tag">
        <button class="tag-button" @click="searchTag(`${tag}`)">
          <u>{{ tag }}</u>
        </button>
      </span>
    </div>
    <div v-for="article in articles" :key="article.title">
      <ul>
        <li>
          <nuxt-link :to="article.path">
            {{ article.title }}
          </nuxt-link>
          <div class="article-detail">
            <div>- DATE: {{ $convertDate(String(article.date)) }}</div>
            <div>
              - TAGS:
              <span v-for="tag in article.tags" :key="tag">
                <button class="tag-button" @click="searchTag(`${tag}`)">
                  <u>{{ tag }}</u>
                </button>
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
  /* eslint-disable */
  components: {},
  data() {
    return {
      query: '',
      articles: []
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        // @ts-ignore
        this.articles = await this.$content('articles')
          .sortBy('date', 'desc')
          .fetch()
        return
      }
      // @ts-ignore
      this.articles = await this.$content('articles')
        .where({ tags: { $contains: query } })
        .sortBy('date', 'desc')
        .fetch()
    }
  },
  async created() {
    // @ts-ignore
    this.articles = await this.$content('articles')
      .sortBy('date', 'desc')
      .fetch()
  },
  methods: {
    searchTag(label: string) {
      this.query = label
    },
    viewTagsUnique(articles: string[]): string[] {
      // @ts-ignore
      const setArticles = new Set(articles.flatMap((article) => article.tags))
      return [...setArticles]
    }
  }
  /* eslint-enable */
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
