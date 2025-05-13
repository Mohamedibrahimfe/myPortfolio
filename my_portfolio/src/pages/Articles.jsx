import { useEffect, useRef } from 'react';
import '../assets/css/Articles.css';
import SEO from '../components/SEO';

const Articles = () => {
  const articleRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '20px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    articleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const articles = [
    {
      id: 1,
      title: "Modern React Development Best Practices",
      excerpt: "Explore the latest best practices in React development, including hooks, state management, and performance optimization techniques.",
      date: "May 10, 2025",
      image: "/project/room.png",
      tags: ["React", "JavaScript", "Web Development"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility-first framework.",
      date: "May 8, 2025",
      image: "/skills/tailwind.png",
      tags: ["CSS", "Tailwind", "UI Design"],
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Frontend Performance Optimization",
      excerpt: "Discover techniques to optimize your frontend applications for better performance and user experience.",
      date: "May 5, 2025",
      image: "/project/portfolio.png",
      tags: ["Performance", "Web Development", "Optimization"],
      readTime: "6 min read"
    }
  ];
  const data = {
    title: "Mohamed Ibrahim - Articles",
    description:
      "Explore my latest articles on web development, React.js, and frontend best practices. Stay updated with my insights and experiences.",
    name: "Mohamed Ibrahim",
    type: "website",
  }
  return (
    <div className="articles-container">
      <SEO description={data.description} title={data.title} name={data.name} type={data.type} />
      <header className="articles-header">
        <h1 className="articles-title">Latest Articles</h1>
        <p className="articles-subtitle">
          Sharing my thoughts and experiences in web development,
          focusing on React.js, modern JavaScript, and frontend best practices.
        </p>
      </header>

      <div className="articles-grid">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className="article-card"
            ref={el => articleRefs.current[index] = el}
          >
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
            <div className="article-content">
              <div className="article-date">
                {article.date} · {article.readTime}
              </div>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-tags">
                {article.tags.map((tag, i) => (
                  <span key={i} className="article-tag">{tag}</span>
                ))}
              </div>
              <a href="#" className="read-more">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Articles;