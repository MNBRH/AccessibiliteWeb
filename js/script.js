
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
    articleElement.href = `article.html?id=${article.id}`;
    articleElement.setAttribute(
      "aria-label",
      `Lire l'article sur le thème : ${article.motCle}`
    );

    const contentDiv = document.createElement("div");

    const titleElement = document.createElement("h3");
    titleElement.textContent = article.titre;

    const articleContent = document.createElement("div");
    articleContent.classList.add("article-content");

    const previewDiv = document.createElement("div");
    previewDiv.classList.add("article-text");

    const previewParagraph = document.createElement("p");
    previewParagraph.textContent = article.preview;

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("article-image");

    const imgElement = document.createElement("img");
    imgElement.src = article.img;
    imgElement.alt = article.titre;

    const commentsLink = document.createElement("a");
    commentsLink.href = `article.html?id=${article.id}#commentaires`;
    commentsLink.textContent = `${article.nombreDeCommentaires} commentaires`;
    commentsLink.setAttribute(
      "aria-label",
      `Voir les ${article.nombreDeCommentaires} commentaires sur l'article : ${article.titre}`
    );

    imageDiv.appendChild(imgElement);
    previewDiv.appendChild(previewParagraph);

    articleContent.appendChild(previewDiv);
    articleContent.appendChild(imageDiv);

    contentDiv.appendChild(titleElement);
    contentDiv.appendChild(articleContent);
    contentDiv.appendChild(commentsLink);

    articleElement.appendChild(contentDiv);
    articlesContainer.appendChild(articleElement);
  });
}

async function init() {
  await displayArticles();
}

init();
