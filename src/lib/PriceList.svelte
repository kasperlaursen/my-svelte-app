<script lang="ts">
	import type { SpotData } from './types';

	export let prices: SpotData[];

	const formatDate = (HourDK: string) => {
		const options: Intl.DateTimeFormatOptions = {
			hour: 'numeric',
			minute: 'numeric',
			hour12: false
		};
		const date = new Date(HourDK);
		return date.toLocaleTimeString('da-DK', options);
	};

	const formatPrice = (price: number) => {
		return (price / 1000).toFixed(2) + " kr.";
	};
</script>

<ul class="price-list">
	{#each prices as entry}
		<li class="price-item">
			<p>{formatDate(entry.HourDK)}</p>
			<b>{formatPrice(entry.SpotPriceDKK)}</b>
		</li>
	{/each}
</ul>

<style>
	.price-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.price-item {
		display: flex;
		gap: 1rem;
	}
	.price-item p {
		margin: 0;
	}

	ul,
	ul li,
	ul ul li {
		margin: 0;
		padding: 0;
		text-indent: 0;
		list-style-type: 0;
	}
</style>
