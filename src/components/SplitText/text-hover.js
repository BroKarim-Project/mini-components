// pertama kita buat <template/>
const template = document.createElement('template');
// dengan innerHTML kita atur gaya elemen
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

// setelah kita membuat kontainer yang akana mengatur layoutr konten kita
// selanjutnya kita membuat custom class bernama TextHover
// sederhanaya kita seperti membuat blueprint dari suatu projek bernama text-hover
//
export default class TextHover extends HTMLElement {
  //karena kita ingin selalu menyertakan TextHover dengan <template/>
  //maka kita akan melakukan inisialisasai di awal, sehingga setiap kali text-hover dipanggil, <template/> akan selalu ikut serta
  constructor() {
    super();
    //kita copy element "template" menggunakan cloneNode
    const templateCopy = template.content.cloneNode(true);
    this.attachShadow({ mode: 'open' }).appendChild(templateCopy);
  }

  //kita definisikan atribut2 dari class ini
  static get observedAttributes() {
    return ['split-by', 'letter-animation', 'word-animation'];
  }

  //untuk setiap karakter text kita taru elemen span
  //misal, jika ada teks 'halo', maka akan dibuat empat elemen <span>, satu untuk setiap karakter
  span(text) {
    const spanElement = document.createElement('span');
    spanElement.textContent = text;

    return spanElement;
  }

  //kita pecah text yang kita buat menjadi array per-karakter atau per-huru
  // ini adalah metode yang ngatur animasi split by letter
  splitByLetter(text) {
    return [...text].map(this.span);
  }
  
  //kita pecah text yang kita buat menjadi array per-kata
  // ini adalah metode yang ngatur animasi split by word
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

//kita buat custom components, nanti akan digunakna dengan nama <text-hover/>
customElements.define('text-hover', TextHover);
