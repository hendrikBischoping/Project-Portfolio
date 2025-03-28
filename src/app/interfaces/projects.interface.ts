/**
 * Interface representing a project info card with its properties and states.
 * This interface defines the structure of a project info card, including its name, state, description, and related links.
 */
export interface Projects {
    name: string;
    class: string;      //also for img-path
    isHovered: boolean;
    isOpened: boolean;
    github: string;
    lifetest: string;
    descriptionDe: string;
    descriptionEn: string;
    technologies: string[];
}