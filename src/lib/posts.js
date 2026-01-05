/** Utility for fetching and processing blog posts from markdown files */
export async function getPosts() {
    let posts = [];

    const paths = import.meta.glob('/src/routes/blog/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        // Handle both /src/... and relative paths if necessary, though /src/ is standard in SvelteKit
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata;
            const post = { ...metadata, slug };
            posts.push(post);
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.publishedAt).getTime() - new Date(first.publishedAt).getTime()
    );

    return posts;
}
