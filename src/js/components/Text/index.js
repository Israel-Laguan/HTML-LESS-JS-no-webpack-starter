import pTemplate from "./Text.template.js";

export default class Text extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(pTemplate().content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['size'];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }
};
