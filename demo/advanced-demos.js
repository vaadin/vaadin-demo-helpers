import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

class AdvancedDemos extends DemoReadyEventEmitter(PolymerElement) {
  static get template() {
    return html`
      <style include="vaadin-component-demo-shared-styles">
        :host {
          display: block;
        }
      </style>

      <h3>Advanced Demo</h3>
      <vaadin-demo-snippet id="advanced-demos-advanced">
        <template preserve-content>
          <select>
            <option>foo</option>
            <option>bar</option>
            <option>baz</option>
          </select>
        </template>
      </vaadin-demo-snippet>
    `;
  }

  static get is() {
    return 'advanced-demos';
  }
}

customElements.define(AdvancedDemos.is, AdvancedDemos);
