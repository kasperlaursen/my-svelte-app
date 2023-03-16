<script lang="ts">
	import PriceList from '../lib/PriceList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to my app</h1>

<PriceList prices={data.prices} />

<code>
	<pre>{JSON.stringify(data.prices, null, 2)}</pre>
</code>
