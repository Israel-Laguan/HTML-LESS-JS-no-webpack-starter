import { pStyle } from './Text.style.js';

const pTemplate = (style={css:'font-style: inherit;'}) => {
    let template = document.createElement('template');
    template.innerHTML += pStyle(style);    
    template.innerHTML += `
        <slot>Hello</slot>
    `;
    return template
} 

export default pTemplate 