<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

{#if status == 404}
	<div class="container text-center mt-5">
		<img src="images/404.svg" class="mb-5" alt="Not found by Katerina Limpitsouni of unDraw" />
		<h2>Page not found</h2>
		<p>The page you are looking for doesn’t exist.</p>
		<a href="/">Go back to about</a>
	</div>
{:else}
	<h1>{status}</h1>
	<p>{error.message}</p>
{/if}

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
