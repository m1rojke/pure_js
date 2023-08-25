export function main(block) {
  return `
    <section class="main">
        <div class="main_title">
          <h1 class="title">MIRO NAILS</h1>
          <p class="subtitle">маникюрный салон</p>
        </div>
        <img
          src="${block.value}"
          class="polish rotation"
        />
    </section>
  `
}