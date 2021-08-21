import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { GdWcNavbar } from '../src/GdWcNavbar.js';
import '../src/gd-wc-navbar.js';

describe('GdWcNavbar', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<GdWcNavbar>(html`<gd-wc-navbar></gd-wc-navbar>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<GdWcNavbar>(html`<gd-wc-navbar></gd-wc-navbar>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<GdWcNavbar>(html`<gd-wc-navbar title="attribute title"></gd-wc-navbar>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<GdWcNavbar>(html`<gd-wc-navbar></gd-wc-navbar>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
