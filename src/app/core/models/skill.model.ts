export interface SkillLevel {
  readonly title: string;
  readonly label: string;
  readonly subtitle: string;
  readonly skills: readonly string[];
  readonly highlighted?: boolean;
}

export interface SkillArea {
  readonly title: string;
  readonly label?: string;
  readonly description: string;
  readonly tags: readonly string[];
}
