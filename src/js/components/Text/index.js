import pTemplate from './Text.template';

export default class Text extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(pTemplate().content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['size'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }
}
