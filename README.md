# Portfolio Website

A personal website and blog built with SvelteKit, Tailwind CSS 4, and MDX.

## Features

- **MDX-powered Blog**: Write blog posts using Markdown with component support.
- **Responsive Design**: Styled with the latest Tailwind CSS 4.
- **About Page**: Dedicated section for personal information.
- **Vercel Deployment**: Optimized for deployment on Vercel.

## Developing

Once you've installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Project Structure

- `src/routes`: Contains the application routes and page logic.
- `src/lib`: Shared components and utilities.
- `static`: Static assets.

## Project Flow

This project uses a file-based CMS approach:

1.  **Content**: Blog posts are created as Markdown files in `src/routes/blog/posts/`. Each file contains frontmatter (metadata like title, date) and the post content.
2.  **Data Retrieval**: The `src/lib/posts.js` utility scans the posts directory using Vite's `import.meta.glob`. It parses the frontmatter to build a list of post objects.
3.  **Server-Side Rendering**: 
    -   `src/routes/blog/+page.server.js` calls `getPosts()` to fetch all posts for the blog index.
    -   `src/routes/+page.server.js` fetches posts and filters for the 3 most recent ones for the homepage.
4.  **Display**: Svelte pages receive this data via `export let data` and iterate through it to display post summaries or full content.
