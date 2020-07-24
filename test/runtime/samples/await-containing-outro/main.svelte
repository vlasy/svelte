<script>
	import { fade } from 'svelte/transition'
  let value = 0
	setTimeout(() => {value = 1}, 10)
	setTimeout(() => {value = 2}, 200)
</script>

the value is
{#await Promise.resolve(value) then x}
  <span out:fade={{duration: 50}}>{x}</span>
{/await}