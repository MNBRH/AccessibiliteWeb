function redirectToHome(event) {
  event.preventDefault();
  window.location.href = "accueil.html";
}

async function fetchArticles() {
  const response = await fetch("../assets/articles.json");
  const articles = await response.json();
  return articles.articles;
}

async function displayArticles() {
  const articles = await fetchArticles();
  const articlesContainer = document.querySelector(".article");
  articles.forEach((article) => {
    const articleElement = document.createElement("article");
    articleElement.classList.add("article");

    const linkElement = document.createElement("a");
    linkElement.href = `article.html?id=${article.id}`;
    linkElement.setAttribute(
      "aria-label",
      `Lire plus sur le thème : ${article.motCle}`
    );

    linkElement.innerHTML = `
    <div class="article-content">
      <h3>${article.titre}</h3>
      <div class="article-content">
        <div class="article-text">
          <p>${article.preview}</p>
        </div>
        <div class="article-image">
          <img src="${article.img}" alt="${article.titre}" />
        </div>
      </div>
    </div>
  `;

    const commentsLinkElement = document.createElement("a");
    commentsLinkElement.href = `article.html?id=${article.id}#commentaires`;
    commentsLinkElement.textContent = `${article.nombreDeCommentaires} commentaires`;
    commentsLinkElement.setAttribute(
      "aria-label",
      `${article.nombreDeCommentaires} commentaires sur le thème : ${article.motCle}`
    );

    articleElement.appendChild(linkElement);
    articleElement.appendChild(commentsLinkElement);

    articlesContainer.appendChild(articleElement);
  });
}

async function init() {
  await displayArticles();
}

init();
