/** Server-side data loader for the project page */
import { CLIENT_PROJECTS, PERSONAL_PROJECTS } from '$lib/projects';

export async function load() {
    return {
        clientProjects: CLIENT_PROJECTS,
        personalProjects: PERSONAL_PROJECTS
    };
}
