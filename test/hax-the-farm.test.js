import { html, fixture, expect } from '@open-wc/testing';
import "../hax-the-farm.js";

describe("HaxTheFarm test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <hax-the-farm
        title="title"
      ></hax-the-farm>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
