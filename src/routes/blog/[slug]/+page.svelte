<!-- Individual blog post display template -->
<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.summary} />
</svelte:head>

<section>
  <h1 class="title font-semibold text-2xl tracking-tighter max-w-[650px]">
    {data.meta.title}
  </h1>
  <div class="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
    <p class="text-sm text-neutral-600 dark:text-neutral-400">
      {data.meta.publishedAt}
    </p>
  </div>
  <article class="prose prose-neutral dark:prose-invert">
    <data.content />
  </article>
</section>
