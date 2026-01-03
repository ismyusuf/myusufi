<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
  // No need for props in Svelte 4 layout
</script>

<nav>
  <a href="/">home</a>
  <a href="/blog">blog</a>
</nav>

{@render children?.()}
