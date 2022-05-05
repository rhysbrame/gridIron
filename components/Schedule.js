import React, { useEffect, useState } from 'react';
import { date } from '../src/utils';
import Carousel, { CarouselItem } from './Carousel';

const Schedule = (props) => {
  const [teamGames, setTeamGames] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const { teamKey } = props;

  //Webpack/vercel not finding process.env...

  // const CURRENT_SEASON_URL =
  //   process.env.NODE_ENV === 'development'
  //     ? 'CurrentSeason.json'
  //     : `https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=${process.env.SPORTSDATA_API_KEY}`;

  const CURRENT_SEASON_URL = `https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=a79947c2b7ac4db7849431550720651c`;

  useEffect(() => {
    fetch(CURRENT_SEASON_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('There is no Roster here');
        }
        return res.json();
      })
      .then((data) => {
        setCurrentYear(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //Webpack/vercel not finding process.env...

  // const SCHEDULE_URL =
  //   process.env.NODE_ENV === 'development'
  //     ? 'Fixtures.json'
  //     : `https://api.sportsdata.io/v3/nfl/scores/json/Schedules/${currentYear}?key=${process.env.SPORTSDATA_API_KEY}`;

  const SCHEDULE_URL = `https://api.sportsdata.io/v3/nfl/scores/json/Schedules/${currentYear}?key=a79947c2b7ac4db7849431550720651c`;

  useEffect(() => {
    teamKey &&
      fetch(SCHEDULE_URL)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data.filter(
            (game) =>
              game.GlobalHomeTeamID === teamKey ||
              game.GlobalAwayTeamID === teamKey
          );
        })
        .then((data) => {
          setTeamGames(data);
        });
  }, [teamKey]);
  return (
    <>
      <div className="schedule-container">
        <h1 className="heading-1">{currentYear}&nbsp;Schedule</h1>
        <ul className="schedule-container__list">
          {teamGames && (
            <Carousel show={2}>
              {teamGames &&
                teamGames.map((game) => {
                  let formattedDate = date(game.DateTime);

                  return game.GameKey ? (
                    <CarouselItem key={game.GameKey}>
                      <li
                        className="schedule-container__details"
                        key={game.GameKey}
                      >
                        <h3 className="heading-3">Week {game.Week}</h3>
                        <p className="schedule-container__game">
                          {game.AwayTeam}&nbsp;@&nbsp;{game.HomeTeam}
                        </p>
                        <p className="schedule-container__game-stadia">
                          ({game.StadiumDetails.Name})
                        </p>
                        <p className="schedule-container__game-media">
                          {formattedDate.hours}:{formattedDate.minutes}&nbsp;
                          {formattedDate.weekday}&nbsp;on&nbsp;
                          <span className="schedule-container__game-media-channel">
                            {game.Channel}
                          </span>
                        </p>
                        <p className="schedule-container__game-media">
                          {' '}
                          {formattedDate.date} {formattedDate.month}{' '}
                          {formattedDate.year}
                        </p>
                      </li>
                    </CarouselItem>
                  ) : (
                    <CarouselItem key={game.Week}>
                      <li
                        className="schedule-container__details schedule-container__details--bye"
                        key={game.Week}
                      >
                        <h3 className="heading-3">Week {game.Week}</h3>
                        <p>Bye Week</p>
                      </li>
                    </CarouselItem>
                  );
                })}
            </Carousel>
          )}
        </ul>
      </div>
    </>
  );
};

export default Schedule;
