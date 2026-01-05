import { getPosts } from '$lib/posts';

export async function load() {
    const posts = await getPosts();
    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
            date: post.publishedAt,
        }))
    };
}
