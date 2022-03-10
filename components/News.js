import React, { useEffect, useState } from 'react';

const News = (props) => {
  const [news, setNews] = useState(null);
  const { teamID } = props;

  //replace fetch local with this url
  const NEWS_URL = `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${teamID}?key=${process.env.SPORTSDATA_API_KEY}`;

  useEffect(() => {
    teamID &&
      fetch('News.json')
        .then((res) => {
          return res.json();
        })
        .then((data) => setNews(data));
  }, [teamID]);

  return (
    <>
      <div className="news-container">
        <h1 className="heading-1">News</h1>
        <div className="news-container_scroll">
          <ul>
            {news &&
              news.map((article) => {
                return (
                  <li className="news-article" key={article.NewsID}>
                    <article>
                      <h4 className="heading-4">{article.Title}...</h4>
                      <p>{article.Content}</p>
                    </article>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
