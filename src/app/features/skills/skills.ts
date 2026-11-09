import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_AREAS, SKILL_LEVELS } from '../../core/data/skills.data';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-skills',
  imports: [SectionHeading],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly skillLevels = SKILL_LEVELS;
  protected readonly skillAreas = SKILL_AREAS;
}
