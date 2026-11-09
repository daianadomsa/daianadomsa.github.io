import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-home',
  imports: [Hero, Skills, Projects],
  template: `
    <app-hero />
    <app-skills />
    <app-projects />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
