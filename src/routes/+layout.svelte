<!-- Root layout for all pages, including navigation and footer -->
<script>
  import '../app.css';
  let { children } = $props();

  const navItems = {
    '/': { name: 'home' },
    '/blog': { name: 'blog' },
    '/project': { name: 'project' }
  };
</script>

<div class="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
  <main class="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
    <nav
      class="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
      id="nav"
    >
      <div class="flex flex-row space-x-0 pr-10">
        {#each Object.entries(navItems) as [path, { name }]}
          <a
            href={path}
            class="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
          >
            {name}
          </a>
        {/each}
      </div>
    </nav>
    <section class="mt-8">
      {@render children?.()}
    </section>
    <footer class="mt-16 text-neutral-600 dark:text-neutral-400 text-sm">
      <p>
        © {new Date().getFullYear()} built with SvelteKit & Tailwind CSS
      </p>
    </footer>
  </main>
</div>
