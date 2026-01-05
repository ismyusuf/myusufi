<script>
  let { data } = $props();
</script>

<h1 class="mb-8 text-2xl font-semibold tracking-tighter">my portfolio</h1>
<p class="mb-4">
  I'm a software engineer, developer, and creator. I love building things that live on the internet.
  This is where I share my thoughts and projects.
</p>

<div class="my-8">
  <h2 class="font-medium text-xl mb-4 tracking-tighter">recent posts</h2>
  <div class="flex flex-col space-y-4">
    {#each data.recentPosts as post}
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
</div>
