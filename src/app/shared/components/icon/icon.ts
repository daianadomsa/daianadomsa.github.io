import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type IconName = 'github' | 'arrow-right' | 'arrow-up-right' | 'check' | 'menu' | 'close';

interface IconDefinition {
  readonly path: string;
  readonly filled?: boolean;
}

const ICONS: Record<IconName, IconDefinition> = {
  github: {
    filled: true,
    path: 'M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z',
  },
  'arrow-right': { path: 'M5 12h14M13 6l6 6-6 6' },
  'arrow-up-right': { path: 'M7 17 17 7M8 7h9v9' },
  check: { path: 'M4.5 12.5l4.5 4.5L19.5 6.5' },
  menu: { path: 'M4 7h16M4 12h16M4 17h16' },
  close: { path: 'M6 6l12 12M18 6 6 18' },
};

@Component({
  selector: 'app-icon',
  template: `
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      [attr.fill]="definition().filled ? 'currentColor' : 'none'"
      [attr.stroke]="definition().filled ? 'none' : 'currentColor'"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path [attr.d]="definition().path" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      width: 1em;
      height: 1em;
      flex: none;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<IconName>();

  protected readonly definition = computed(() => ICONS[this.name()]);
}
