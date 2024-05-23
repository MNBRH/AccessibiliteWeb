export default async function fetchArticles() {
  const response = await fetch("../assets/articles.json");
  const articles = await response.json();
  return articles.articles;
}
