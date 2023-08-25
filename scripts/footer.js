export function footer() {
  return `
    <footer class="footer">
      <div class="footer_columns">
        <div class="footer_column_content_copyright">
          <div class="logo"></div>
          <p class="footer_author">&COPY; MIROSH</p>
        </div>
        <nav class="footer_column_content_info">
          <p class="footer_column-heading">О салоне :</p>
          <div class="footer_column-links">
            <a href="#" class="link">Главная</a>
            <a href="#" class="link">Материалы</a>
            <a href="#" class="link">Наставники</a>
          </div>
        </nav>
        <nav class="footer_column_content_social">
          <p class="footer_column-heading">Соцсети :</p>
          <div class="footer_column-links">
            <a href="https://www.instagram.com/" target="_blank" class="link" rel="noopener noreferrer">
              <img alt="ютуб" src="images/icons8-instagram.svg" class="footer_social-icon">Instagram</a>
            <a href="https://vk.com/" target="_blank" class="link" rel="noopener noreferrer">
              <img alt="картинка" src="images/icons8-вконтакте.svg" class="footer_social-icon">Вконтакте</a>
            <a href="https://www.telegram.com/ru-RU/" target="_blank" class="link" rel="noopener noreferrer">
              <img alt="картинка" src="images/icons8-логотип-telegram.svg" class="footer_social-icon">Telegram</a>
          </div>
        </nav>
      </div>
    </footer>
  `
}