<script>
import { store } from '../src/assets/data/store'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },

}
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppMain />

  </main>
  <footer></footer>
</template>

<style scoped></style>
