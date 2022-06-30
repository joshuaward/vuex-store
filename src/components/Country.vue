<template lang="pug">
.country
	.country__inner
		.country__flag
			img(v-if="country.flags.svg" :src="country.flags.svg")
			img(v-else :src="country.flags.png")
		.country__content
			h4.country__name {{ country.name.official }}
			.country__population 
				span Population: 
				span {{ country.population }}
			.country__capital(v-if="country.capital") 
				span Capital: 
				span(v-for="city in country.capital") {{ city }}
			.country__continent
				span Continent(s): 
				span(v-for="continent in country.continents") {{ continent }}
</template>

<script>
export default {
	name: "Country",
	props: ['country'],
	created() {}
}
</script>

<style lang="scss">
@import '@/assets/main.scss';

.country {
	border: 1px solid $gray;
	&__flag {
		position: relative;
		&::after {
			content: '';
			display: block;
			padding-bottom: 56.25%;
		}
		img {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>