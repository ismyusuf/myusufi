<!-- Content template for the project page -->
<script>
  let { data } = $props();
  let activeTab = $state('client');
</script>

<h1 class="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>

<div class="mb-16">
  <div class="flex items-center space-x-6 mb-8">
    <button
      class="text-xl font-medium tracking-tight transition-colors {activeTab === 'client'
        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1'
        : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200'}"
      onclick={() => (activeTab = 'client')}
    >
      client projects
    </button>
    <button
      class="text-xl font-medium tracking-tight transition-colors {activeTab === 'personal'
        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1'
        : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200'}"
      onclick={() => (activeTab = 'personal')}
    >
      personal projects
    </button>
  </div>

  <div class="flex flex-col space-y-12">
    {#if activeTab === 'client'}
      {#each data.clientProjects as project}
        <div class="flex flex-col space-y-3 animation-in slide-in-from-bottom-5 duration-500">
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
            <h3 class="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
              {project.title}
            </h3>
            <span class="text-neutral-500 dark:text-neutral-400 text-sm">{project.date}</span>
          </div>
          <p class="text-neutral-600 dark:text-neutral-400 max-w-[600px] leading-relaxed">
            {project.description}
          </p>
          {#if project.tech}
            <div class="flex flex-wrap gap-2 pt-1">
              {#each project.tech.split(', ') as tech}
                <span
                  class="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-2 py-0.5 rounded text-xs"
                >
                  {tech}
                </span>
              {/each}
            </div>
          {/if}
          {#if project.link && project.link !== '#'}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-1"
            >
              Learn About {project.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-1"
                ><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"
                ></polyline></svg
              >
            </a>
          {/if}
        </div>
      {/each}
    {:else}
      {#each data.personalProjects as project}
        <div class="flex flex-col space-y-3 animation-in slide-in-from-bottom-5 duration-500">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-md shrink-0"></div>
            <div class="flex flex-col">
              <h3 class="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              <span class="text-neutral-500 dark:text-neutral-400 text-xs">{project.date}</span>
            </div>
          </div>
          <p class="text-neutral-600 dark:text-neutral-400 max-w-[600px] leading-relaxed">
            {project.description}
          </p>
          {#if project.tech}
            <div class="flex flex-wrap gap-2 pt-1">
              {#each project.tech.split(', ') as tech}
                <span
                  class="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-2 py-0.5 rounded text-xs"
                >
                  {tech}
                </span>
              {/each}
            </div>
          {/if}
          {#if project.link && project.link !== '#'}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-1"
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-1"
                ><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"
                ></polyline></svg
              >
            </a>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>
