import React, { useEffect, useState } from 'react';

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
        <ul className="roster-grid">
          {roster &&
            roster.map((player) => {
              return (
                <li className="roster-player" key={player.PlayerID}>
                  <h5 className="heading-5">
                    {player.FirstName}&nbsp;{player.LastName}
                  </h5>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Roster;
