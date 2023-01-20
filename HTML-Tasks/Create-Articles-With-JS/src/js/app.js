
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let body = document.querySelector("body");
  body.addEventListener("click", () => {

    let children = Array.from(document.querySelectorAll('.message'));
    if (children.length > 0) {
      return;
    };
    
    for (let i = 0; i < 5; i++) {
      let article = document.createElement('article');
      article.textContent = 'some content';
      article.classList.add('message');

      body.appendChild(article);
    }
  });
});
