import fetchArticles from "./fetchArticles.js";

async function getArticle() {
  const articles = await fetchArticles();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const article = articles.filter((article) => article.id == id);
  return article[0];
}

async function displayArticle() {
  const article = await getArticle();
  document.title = article.titre;
  document.querySelector(".container").innerHTML = `
      <article class="article">
        <header class="article-header">
          <h1>${article.titre}</h1>
        </header>
        <section class="article-content">
          <div class="article-text">
            <p>${article.preview}</p>
          </div>
          <figure class="article-image">
            <img src="${article.img}" alt="${
    article.imgAlt ? article.imgAlt : "Image de " + article.titre
  }">
            <figcaption>${
              article.imgCaption ? article.imgCaption : ""
            }</figcaption>
          </figure>
        </section>
        <section class="article-table">
          <table>
            <caption>Informations importantes sur l'article</caption>
            <thead>
              <tr>
                <th scope="col">Colonne 1</th>
                <th scope="col">Colonne 2</th>
                <th scope="col">Colonne 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ligne 1, Colonne 1</td>
                <td>Ligne 1, Colonne 2</td>
                <td>Ligne 1, Colonne 3</td>
              </tr>
              <tr>
                <td>Ligne 2, Colonne 1</td>
                <td>Ligne 2, Colonne 2</td>
                <td>Ligne 2, Colonne 3</td>
              </tr>
              <tr>
                <td>Ligne 3, Colonne 1</td>
                <td>Ligne 3, Colonne 2</td>
                <td>Ligne 3, Colonne 3</td>
              </tr>
              <tr>
                <td>Ligne 4, Colonne 1</td>
                <td>Ligne 4, Colonne 2</td>
                <td>Ligne 4, Colonne 3</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">Pied de tableau</td>
              </tr>
            </tfoot>
          </table>
        </section>
      </article>
    `;
}

async function init() {
  const articleee = await getArticle();
  console.log(articleee);
  await displayArticle();
}

init();
