import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { LightDomHelper } from './vaadin-light-dom-helper.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

let instanceIndex = 0;

const demoScripts = new WeakMap();

class VaadinDemoShadowDomRenderer extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        padding: 1.5em;
      }
    </style>
  `;
  }

  static get is() {
    return 'vaadin-demo-shadow-dom-renderer';
  }

  static get properties() {
    return {
      id: {
        type: String,
        value: () => {
          return `vaadin-demo-shadow-dom-${instanceIndex++}`;
        }
      },
    };
  }

  ready() {
    super.ready();
    LightDomHelper.querySelectorAsync('slot', this)
      .then(slot => {
        return LightDomHelper.querySlotContentAsync('template', slot);
      })
      .then(template => {
        this._showDemo(template);
      })
      .catch(error => {
        throw new Error('vaadin-demo-iframe-renderer requires a <template> child');
      });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (demoScripts.has(this)) {
      const script = demoScripts.get(this);
      script.parentNode.removeChild(script);
      demoScripts.delete(this);
    }
  }

  _showDemo(template) {
    // if the snippet contains a script, let's execute it
    const script = template.content.querySelector('script');
    if (script) {
      const clone = document.createElement('script');
      clone.textContent = script.textContent;
      document.body.appendChild(clone);
      demoScripts.set(this, clone);
    }

    window.ShadyCSS.prepareTemplate(template, this.id);
    const dom = this.getRootNode().host._stampTemplate(template);

    this.shadowRoot.appendChild(dom);
  }
}
customElements.define(VaadinDemoShadowDomRenderer.is, VaadinDemoShadowDomRenderer);
