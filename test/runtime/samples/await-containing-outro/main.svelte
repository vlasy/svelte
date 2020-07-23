<script>
	import { fade } from 'svelte/transition'
  let value = 0
	setTimeout(() => {value = 1}, 50)
	setTimeout(() => {value = 2}, 100)
</script>

the value is
{#await Promise.resolve(value) then x}
  <span out:fade={{duration: 0}}>{x}</span>
{/await}