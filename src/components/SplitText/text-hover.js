
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :root {
      display: block;
    }

    .wrapper {
      --fontSize: 3rem;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.3rem;
      font-size: var(--fontSize, 3rem);
      font-weight: 100;
      text-transform: uppercase;
    }

    .wrapper > span {
      display: inline-block;
      white-space: break-spaces;
    }

    @media (prefers-reduced-motion: no-preference) {
      :host([letter-animation]) .wrapper:hover > span {
        transform: scale(0.65);
      }

      :host([letter-animation]) .wrapper > span {
        transition: transform 0.3s ease;
          cursor: pointer;
      }
      :host([letter-animation]) .wrapper > span:hover {
        transform: scale(1.35);
      }

      :host([word-animation]) .wrapper {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 1ch;
        overflow: hidden;
      }

      :host([word-animation]) .wrapper span:not(:hover) {
        transform: translateY(50%);
      }

      :host([word-animation]) .wrapper > span {
        transition: transform 0.3s ease;
        cursor: pointer;
      }
    }
  </style>
  <div class="wrapper">
  </div>
`;

export default class TextHover extends HTMLElement {
  constructor() {
    super();
    const templateCopy = template.content.cloneNode(true);
    this.attachShadow({ mode: 'open' }).appendChild(templateCopy);
  }

  static get observedAttributes() {
    return ['split-by', 'letter-animation', 'word-animation'];
  }

  span(text) {
    const spanElement = document.createElement('span');
    spanElement.textContent = text;

    return spanElement;
  }

  splitByLetter(text) {
    return [...text].map(this.span);
  }
    splitByWord(text) {
    return text.split(' ').map(this.span);
  }

  getSplitNodes() {
    const text = this.textContent.trim();
    const type = this.getAttribute('split-by');
    let nodes = null;
    if (type === 'letter') {
      nodes = this.splitByLetter(text);
    } else if (type === 'word') {
      nodes = this.splitByWord(text);
    }
    return nodes;
  }

  setSplitNodes(nodes) {
    if (!nodes) return;
    this.textContent = '';
    const animateNode = this.shadowRoot.querySelector('.wrapper');
    animateNode.firstChild.replaceWith(...nodes);
  }

  transformNode() {
    const { matches: motionOK } = window.matchMedia('(prefers-reduced-motion: no-preference)');

    if (!motionOK) return;

    const nodes = this.getSplitNodes();
    this.setSplitNodes(nodes);
  }

  connectedCallback() {
    this.transformNode();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue && newValue !== oldValue) {
      this.transformNode();
    }
  }
}
customElements.define('text-hover', TextHover);
