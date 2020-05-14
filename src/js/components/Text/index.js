// @ts-check
import pTemplate from './TextTemplate.js';

export default class Text extends HTMLElement {
  constructor() {
    super();
    // eslint-disable-next-line
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    // eslint-disable-next-line
    this._shadowRoot.appendChild(pTemplate().content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['size'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }
}
