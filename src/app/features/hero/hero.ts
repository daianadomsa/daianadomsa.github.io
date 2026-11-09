import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE, ROLE_TARGETS } from '../../core/data/profile.data';
import { PROJECTS } from '../../core/data/projects.data';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly roleTargets = ROLE_TARGETS;
  protected readonly projectCount = PROJECTS.length;
  protected readonly domainCount = new Set(PROJECTS.map((project) => project.category)).size;
}
