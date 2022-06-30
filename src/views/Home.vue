<template lang="pug">
Loader(v-if="!loaded") Loading...
section.home(v-else-if="loaded")
	.section__inner
		.g
			.g__c
				Search
		.g
			.g__c.g__c--md6.g__c--lg4(v-for="(country,i) in items" :key="i")
				Country(:country="country")
.error(v-else) Something went wrong...
</template>

<script>
// @ is an alias to /src
import Store from '@/store/index';
import { mapGetters, mapActions  } from 'vuex';
import Loader from '@/components/Loader.vue';
import Search from '@/components/Search.vue';
import Country from '@/components/Country.vue';

export default {
  name: 'Home',
	store: Store,
  components: {
		Loader,
		Search,
		Country
	},
	computed: {
		...mapGetters(['items', 'loaded']),
	},
	methods: {
		...mapActions(['getData']),
	},
	created() {
		console.log('this.items', this.items[0])
		this.getData();
	}
}
</script>

<style lang="scss">

</style>