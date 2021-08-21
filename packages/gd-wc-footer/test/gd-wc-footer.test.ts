import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { GdWcFooter } from '../src/GdWcFooter.js';
import '../src/gd-wc-footer.js';

describe('GdWcFooter', () => {
  let element: GdWcFooter;
  beforeEach(async () => {
    element = await fixture(html`<gd-wc-footer></gd-wc-footer>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
