import React, { useEffect, useState } from 'react';
import Carousel, { CarouselItem } from './Carousel';

const News = (props) => {
  const [news, setNews] = useState(null);
  const { teamID } = props;

  //replace fetch local with this url
  const NEWS_URL = `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${teamID}?key=${process.env.SPORTSDATA_API_KEY}`;

  useEffect(() => {
    teamID &&
      fetch('News.json')
        .then((res) => {
          if (!res.ok) {
            throw new Error('There is no news here');
          }
          return res.json();
        })
        .then((data) => {
          setNews(data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [teamID]);

  return (
    <>
      <div className="news-container">
        <h1 className="heading-1">News</h1>
        {news && (
          <Carousel>
            {news &&
              news.map((article) => {
                return (
                  <CarouselItem key={article.NewsID}>
                    <article className="article">
                      <h2 className="article__title">{article.Title}...</h2>
                      <p className="article__content">{article.Content}</p>
                    </article>
                  </CarouselItem>
                );
              })}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default News;
