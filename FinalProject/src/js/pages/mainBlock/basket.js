export function basketHTML() {
  let html = `<h1> hi, i'm basket</h1>`;
  return html;
}


export function basketCSS1() {
  let html = `
  .productDetailsImg {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .productDetailsImg img {
    width: 17vw;
    height: 70vh;
  }

  .productBasketDescription {
    display:flex;
    flex-direction:column;
  }

  .productDetailsDescription:nth-child(n) {
    margin-left:40px;
    margin-top:40px;

  }

  `;
  return html;
}

export function basketCSS2() {
  let html = ``;
  return html;
}
