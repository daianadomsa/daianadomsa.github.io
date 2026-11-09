import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <header class="section-heading">
      <span class="section-heading__eyebrow">{{ eyebrow() }}</span>
      <h2>{{ title() }}</h2>
      @if (lead()) {
        <p>{{ lead() }}</p>
      }
    </header>
  `,
  styles: `
    :host {
      display: block;
      margin-bottom: clamp(2rem, 4.5vw, 3rem);
    }

    .section-heading {
      max-width: 48rem;
    }

    .section-heading__eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      color: var(--accent-ink);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .section-heading__eyebrow::before {
      content: '';
      width: 1.75rem;
      height: 1px;
      background: var(--accent);
    }

    h2 {
      margin: 0.8rem 0 0.85rem;
      color: var(--text);
      font-size: clamp(1.95rem, 3.6vw, 2.8rem);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.03em;
    }

    p {
      max-width: 40rem;
      color: var(--text-muted);
      font-size: 1rem;
      line-height: 1.7;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly lead = input('');
}
