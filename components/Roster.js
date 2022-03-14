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
              console.log(player);
              return (
                <li className="roster-player" key={player.PlayerID}>
                  <h5 className="heading-5">Name:&nbsp;{player.Name}</h5>
                  <h5 className="heading-5">Number:&nbsp;{player.Number}</h5>
                  <h5 className="heading-5">College:&nbsp;{player.College}</h5>
                  <h5 className="heading-5">
                    Position:&nbsp;{player.Position}
                  </h5>
                  <img
                    className="player-img"
                    src={player.PhotoUrl}
                    alt="photo"
                  />
                  <br />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Roster;
