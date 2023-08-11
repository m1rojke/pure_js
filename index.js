const model = [
  { type: "title", value: "Hello JS World" },
  { type: "text", value: "Some text" },
  { type: "columns", value: [111111111, 222222222, 333333333, 44444444, 555555, 6666666] },
  { type: "images", value: './img/homer.jpg'}
];

const $site = document.querySelector("#site");

model.forEach((block) => {
  let html = "";

  if (block.type === "title") {
    html = title(block);
  } else if (block.type === "text") {
    html = text(block);
  } else if (block.type === "columns") {
    html = columns(block);
  } else if (block.type === "images") {
    html = images(block);
  }

  $site.insertAdjacentHTML("beforeend", html);
});

function title(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `;
}

function text(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
    </div>
  `;
}

function columns(block) {
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
  return `
    <div class="row">
      ${html.join('')}
    </div>
  `
}

function images(block) {
  return `
    <div class="row">
      <img src="${block.value}"  class="homer"/>
    </div>
  `
}
