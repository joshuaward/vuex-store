<template lang="pug">
Header
router-view
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/components/Header.vue';

export default {
	name: "App",
	components: {
		Header
	},
	mounted() {}
}
</script>

<style lang="scss">
@import '@/assets/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
