import React, { useEffect, useState } from 'react';

const Schedule = (props) => {
  const [teamGames, setTeamGames] = useState(null);
  const { teamKey } = props;

  //replace fetch local with this url and make a current year fetch
  const currentYear = '2021';
  const url = `https://api.sportsdata.io/v3/nfl/scores/json/Schedules/${currentYear}?key=a79947c2b7ac4db7849431550720651c`;

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
      <div className="fixtures-container">
        <h1>Schedule</h1>
        <ul>
          {teamGames &&
            teamGames.map((game) => {
              return (
                <li key={game.GameKey}>
                  <h5>{game.AwayTeam}</h5>
                  <h5>{game.DateTime}</h5>
                  <h5>{game.Channel}</h5>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Schedule;
