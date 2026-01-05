/** Server-side data loader for the home page */
import { getPosts } from '$lib/posts';
import { CLIENT_PROJECTS, PERSONAL_PROJECTS } from '$lib/projects';

export async function load() {
    const posts = await getPosts();
    return {
        recentPosts: posts
            .slice(0, 3)
            .map((post) => ({
                slug: post.slug,
                title: post.title,
                date: post.publishedAt
            })),
        clientProjects: CLIENT_PROJECTS.slice(0, 2),
        personalProjects: PERSONAL_PROJECTS.slice(0, 2)
    };
}
