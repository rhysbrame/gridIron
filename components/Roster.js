import React, { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import Carousel, { CarouselItem } from './Carousel';

const Roster = (props) => {
  const [roster, setRoster] = useState(null);
  const { teamID } = props;

  //Webpack/vercel not finding process.env...

  // const ROSTER_URL =
  //   process.env.NODE_ENV === 'development'
  //     ? 'Roster.json'
  //     : `https://api.sportsdata.io/v3/nfl/scores/json/Players/${teamID}?key=${process.env.SPORTSDATA_API_KEY}`;

  const ROSTER_URL = `https://api.sportsdata.io/v3/nfl/scores/json/Players/${teamID}?key=${process.env.SPORTSDATA_API_KEY}`;

  useEffect(() => {
    teamID &&
      fetch(ROSTER_URL)
        .then((res) => {
          if (!res.ok) {
            throw new Error('There is no Roster here');
          }
          return res.json();
        })
        .then((data) => setRoster(data))
        .catch((error) => {
          console.error(error);
        });
  }, [teamID]);

  return (
    <>
      <div className="roster-container">
        <h1 className="heading-1">Roster</h1>
        <div className="player-grid">
          {roster && (
            <Carousel show={3}>
              {roster &&
                roster.map((player) => {
                  return (
                    <CarouselItem key={player.PlayerID}>
                      <PlayerCard player={player} key={player.PlayerID} />
                    </CarouselItem>
                  );
                })}
            </Carousel>
          )}
        </div>
      </div>
    </>
  );
};

export default Roster;
