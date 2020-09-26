<template>
  <div>
    <button class="footer-button" v-on:click="moveTop">
      <p><u>TOPへ戻る</u></p>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    moveTop: function() {
      window.location.href = '/'
    }
  }
})
</script>

<style>
.footer-button {
  border: none;
  outline: none;
  background: transparent;
}
</style>