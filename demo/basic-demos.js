import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

class BasicDemos extends DemoReadyEventEmitter(PolymerElement) {
  static get template() {
    return html`
      <style include="vaadin-component-demo-shared-styles">
        :host {
          display: block;
        }
      </style>

      <h3>Basic Demo</h3>
      <vaadin-demo-snippet id="basic-demos-basic">
        <template preserve-content="">
          <button>Button</button>
        </template>
      </vaadin-demo-snippet>
    `;
  }

  static get is() {
    return 'basic-demos';
  }
}

customElements.define(BasicDemos.is, BasicDemos);
