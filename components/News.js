import React, { useEffect, useState } from 'react';

const News = (props) => {
  const [news, setNews] = useState(null);
  const { teamID } = props;

  //replace fetch local with this url
  const url = `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${teamID}?key=a79947c2b7ac4db7849431550720651c`;

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
        <h1>News</h1>
        <ul>
          {news &&
            news.map((article) => {
              return (
                <li key={article.NewsID}>
                  <h3>{article.Title}</h3>
                  <h5>{article.Content}</h5>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default News;
