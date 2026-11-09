import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../core/data/projects.data';
import { Project } from '../../core/models/project.model';
import { Icon } from '../../shared/components/icon/icon';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

const ALL_CATEGORIES = 'Toate';

@Component({
  selector: 'app-projects',
  imports: [SectionHeading, Icon],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly activeCategory = signal(ALL_CATEGORIES);

  protected readonly categories = computed<readonly string[]>(() => [
    ALL_CATEGORIES,
    ...new Set(PROJECTS.map((project) => project.category)),
  ]);

  protected readonly filteredProjects = computed<readonly Project[]>(() => {
    const category = this.activeCategory();
    return category === ALL_CATEGORIES
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === category);
  });

  protected selectCategory(category: string): void {
    this.activeCategory.set(category);
  }

  protected formatId(id: number): string {
    return id.toString().padStart(2, '0');
  }
}
