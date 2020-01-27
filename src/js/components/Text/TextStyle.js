// @ts-check

const pStyle = (props = null) => `
    <style>
        p {
            ${props.css ? props.css : props.p}
        }
    </style>
`;

export default pStyle;
