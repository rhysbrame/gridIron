import React, { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';

const Roster = (props) => {
  const [roster, setRoster] = useState(null);
  const { teamID } = props;

  //replace fetch local with this url
  const url = `https://api.sportsdata.io/v3/nfl/scores/json/Players/${teamID}?key=${process.env.SPORTSDATA_API_KEY}`;

  useEffect(() => {
    teamID &&
      fetch('Roster.json')
        .then((res) => {
          return res.json();
        })
        .then((data) => setRoster(data));
  }, [teamID]);

  return (
    <>
      <div className="roster-container">
        <h1 className="heading-1">Roster</h1>
        <div className="player-grid">
          {roster &&
            roster.map((player) => {
              return (
                <>
                  <PlayerCard player={player} />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Roster;
