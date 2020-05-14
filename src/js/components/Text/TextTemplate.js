// @ts-check

import pStyle from './TextStyle.js';

const pTemplate = (style = { css: 'font-style: inherit;' }) => {
  const template = document.createElement('template');
  template.innerHTML += pStyle(style);
  template.innerHTML += `
        <slot>Hello</slot>
    `;
  return template;
};

export default pTemplate;
