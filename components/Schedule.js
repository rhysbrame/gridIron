import React, { useEffect, useState } from 'react';

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
        <h1 className="heading-1">Schedule</h1>
        <ul>
          {teamGames &&
            teamGames.map((game) => {
              return (
                <li key={game.GameKey}>
                  <h5 className="heading-5">{game.AwayTeam}</h5>
                  <h5 className="heading-5">{game.DateTime}</h5>
                  <h5 className="heading-5">{game.Channel}</h5>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Schedule;
