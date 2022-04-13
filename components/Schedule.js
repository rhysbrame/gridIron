import React, { useEffect, useState } from 'react';
import { date } from '../src/utils';

const Schedule = (props) => {
  const [teamGames, setTeamGames] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const { teamKey } = props;

  const current_season_url = `https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=${process.env.SPORTSDATA_API_KEY}`;

  //'CurrentSeason.json'

  useEffect(() => {
    fetch('CurrentSeason.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentYear(data);
      });
  });

  const schedule_url = `https://api.sportsdata.io/v3/nfl/scores/json/Schedules/${currentYear}?key=${process.env.SPORTSDATA_API_KEY}`;

  //'Fixtures.json'

  useEffect(() => {
    teamKey &&
      fetch('Fixtures.json')
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
          {teamGames &&
            teamGames.map((game) => {
              let formattedDate = date(game.DateTime);

              return game.GameKey ? (
                <li className="schedule-container__details" key={game.GameKey}>
                  <h3 className="heading-3">Week {game.Week}</h3>
                  <p className="schedule-container__game">
                    {game.AwayTeam}&nbsp;@&nbsp;{game.HomeTeam} (
                    {game.StadiumDetails.Name})
                  </p>
                  <p className="schedule-container__game-media">
                    {formattedDate.hours}:{formattedDate.minutes}&nbsp;
                    {formattedDate.weekday}&nbsp;on&nbsp;{game.Channel}
                  </p>
                  <p className="schedule-container__game-media">
                    {' '}
                    {formattedDate.date} {formattedDate.month}{' '}
                    {formattedDate.year}
                  </p>
                </li>
              ) : (
                <li
                  className="schedule-container__details schedule-container__details--bye"
                  key={game.Week}
                >
                  <h3 className="heading-3">Week {game.Week}</h3>
                  <p>Bye Week</p>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Schedule;
