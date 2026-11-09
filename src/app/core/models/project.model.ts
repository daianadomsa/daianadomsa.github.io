export interface Project {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly category: string;
  readonly githubLink: string;
}
