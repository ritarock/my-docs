<template>
  <div>
    <button class="header-button" v-on:click="moveTop">
      <h1>Ghostの囁き</h1>
    </button>
    <hr color="black">
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
.header-button {
  border: none;
  outline: none;
  background: transparent;
}
</style>