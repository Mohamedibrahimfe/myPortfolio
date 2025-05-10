const Articles = ({ articles }) => {
  const sortedArticles = articles.sort((a, b) => b.date - a.date);
  const articleElements = sortedArticles.map((article, index) => (
    <article key={index}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </article>
  ));
  return <div>{articleElements}</div>;
};
export default Articles;