/**
 * Copyright 2025 winstonwumbo
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `gpslab-annotation-dashboard`
 * 
 * @demo index.html
 * @element gpslab-annotation-dashboard
 */
export class NavigationRibbon extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "navigation-ribbon";
  }

  constructor() {
    super();
    this.title = "";
    this.subtitle = "";
    this.popupStatus = false;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      subtitle: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        color: var(--ddd-theme-default-white);
        background-color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        display: inline-flex;
        width: 100%;
        justify-content: space-between;
      }
      .left-spacer {
        display: inline-flex;      
        align-items: center;
      }
      .left-spacer > * {
        margin-left: 16px;
      }
      img {
        width: 70px;
        height: 40px;
        margin-top: 4px;
      }
      h4 {
        margin: 4px;
        font-size: 20px;
      }
      .right-spacer {
        display: inline-flex;
        align-items: center;
      }
      .git-link:any-link{
        padding-right: 20px;
        margin: 0;
        color: var(--ddd-theme-default-limestoneLight);
      }
      button {
        padding: 4px 8px;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        font-size: 16px;
        background-color: var(--dashboard-button-background-color, var(--ddd-theme-default-white));
        color: var(--dashboard-button-text-color, var(--ddd-theme-default-nittanyNavy));
      }
      button:hover {
        cursor: pointer;
        background-color: darkgray;
      }
    `];
  }

  changePage(e) {
    let pageTitle = e.target.textContent;

    this.dispatchEvent(
      new CustomEvent("change-page", {
        bubbles: true,
        composed: true,
        detail: { page: pageTitle },
      })
    );
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
          <slot></slot>
          <div class="left-spacer">
            <img src="https://pbs.twimg.com/profile_images/904797920758824960/rrvApRfs_400x400.jpg" alt="Penn State University Emblem">
            <h4>${this.title}</h4>
            <button @click=${this.changePage}>Calendar</button>
            <button @click=${this.changePage}>Something</button>
            <button @click=${this.changePage}>About Us</button>
          </div>

          <div class="right-spacer">
            <a class="git-link" href="https://github.com/winstonwumbo/hax-the-farm">${this.subtitle}</a>
          </div>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(NavigationRibbon.tag, NavigationRibbon);