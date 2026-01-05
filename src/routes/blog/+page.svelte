<!-- Blog index page showing list of posts -->
<script>
  export let data;
</script>

<h1 class="font-semibold text-2xl mb-8 tracking-tighter">my blog</h1>

<div class="flex flex-col space-y-4">
  {#each data.summaries as post}
    <a
      href="/blog/{post.slug}"
      class="flex flex-col space-y-1 mb-4 transition-opacity hover:opacity-80"
    >
      <div class="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <p class="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
          {post.date}
        </p>
        <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
          {post.title}
        </p>
      </div>
    </a>
  {/each}
</div>
