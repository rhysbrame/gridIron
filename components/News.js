import React, { useEffect, useState } from 'react';
import Carousel, { CarouselItem } from './Carousel';

const News = (props) => {
  const [news, setNews] = useState(null);
  const { teamID } = props;

  // const NEWS_URL =
  //   process.env.NODE_ENV === 'development'
  //     ? 'News.json'
  //     : `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${teamID}?key=${process.env.SPORTSDATA_API_KEY}`;

  console.log(process.env.NODE_ENV);

  const NEWS_URL = `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${teamID}?key=${process.env.SPORTSDATA_API_KEY}`;

  useEffect(() => {
    teamID &&
      fetch(NEWS_URL)
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
        <h1 className="heading-1">{`News ${process.env.NODE_ENV}`}</h1>
        {news && (
          <Carousel show={1}>
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
