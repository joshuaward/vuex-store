<template lang="pug">
header.header
	.header__inner
		a.header__logo(href="/")
			img(alt="Vue logo" src="@/assets/img/logo.png")
			span Vue Countries
		nav.header__nav
			router-link(to="/") Home
			router-link(to="/about") About

</template>

<script>

export default {
	name: "Header",
	props: [],
	computed: {},
	methods: {},
	mounted() {}
}
</script>

<style lang="scss">
@import '@/assets/main.scss';

.header {
	position: relative;
	height: auto;
	padding-top: 0.625rem;
	padding-bottom: 0.625rem;
	background-color: $color2;
	animation: none;
	z-index: 999;
	&.scrolled {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		animation: stickyHeader 0.35s ease;
	}
	&__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: $maxWidth;
		margin-right: 1rem;
		margin-left: 1rem;
		width: calc(100% - (1rem * 2));
		@media (min-width: $lg) {
			margin-right: auto;
			margin-left: auto;
			width: 100%;
		}
	}
	&__logo {
		display: flex;
		align-items: center;
		justify-content: center;
		color: $white;
		text-decoration: none;
		img {
			display: block;
			width: 1.125rem;
			height: 1.125rem;
			margin-right: 0.5rem;
		}
	}
	&__nav {
		display: flex;
		a {
			padding: 0 0.625rem;
			color: $white;
			font-size: 0.875rem;
			text-decoration: none;
		}
	}
}

@keyframes stickyHeader {
	0%   { top: -100% }
	100% { top: 0; }
}
</style>