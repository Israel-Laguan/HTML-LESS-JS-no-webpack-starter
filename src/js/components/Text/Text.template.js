import pStyle from './Text.style';

const pTemplate = (style = { css: 'font-style: inherit;' }) => {
  const template = document.createElement('template');
  template.innerHTML += pStyle(style);
  template.innerHTML += `
        <slot>Hello</slot>
    `;
  return template;
};

export default pTemplate;
