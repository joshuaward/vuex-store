<template lang="pug">
.loading
	.loader(data-label="Loading")
		- for(var i =0; i < 25; i++)
			.square
</template>

<script>
export default {
	name: "Loader"
}
</script>

<style lang="scss">
@import '@/assets/main.scss';

.loading {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
}
.loader {
	position: relative;
	display: grid;
	grid-template-columns:
		14.2857% 14.2857% 14.2857% 14.2857% 14.2857% 14.2857% 14.2857%;
	grid-template-rows:
		14.2857% 14.2857% 14.2857% 14.2857% 14.2857% 14.2857% 14.2857%;
	width: 150px;
	height: 150px;
	border-radius: 3px;
	box-shadow: 0 0 1.25rem rgba($black, 0.2);;
	overflow: hidden;
	&::after {
		content: attr(data-label);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: $whitesmoke;
		color: $text;
		z-index: -1;
	}
	.square {
		transform: translateY(-1000%);
		animation: drop 2s linear infinite; 
		@for $i from 1 through 25 {
			&:nth-of-type(#{$i}) {
				grid-column: auto / span 1;
				grid-row: auto / span 1;
				background-color: hsla(($i*14.4), 70%, 50%, 1);
				animation-delay: #{($i*-30.3)}ms;
				&:before {
					//content: '#{$i}';
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 100%;
					font-size: 10px;
				}
			}
		}
		&:nth-of-type(1),
		&:nth-of-type(4),
		&:nth-of-type(6),
		&:nth-of-type(11),
		&:nth-of-type(12),
		&:nth-of-type(17),
		&:nth-of-type(21),
		&:nth-of-type(22) {
			grid-column: auto / span 2;
			grid-row: auto / span 2;
		}
	}
}

@keyframes drop {
	0% { transform: translateY(-1000%); }
	20% { transform: translateY(0%); }
	50% { transform: translateY(0%); }
	80% { transform: translateY(0%); }
	90% { transform: translateY(1000%); }
	100% { transform: translateY(1000%); }
}
</style>