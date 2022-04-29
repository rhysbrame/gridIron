import React, { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import Carousel, { CarouselItem } from './Carousel';

const Roster = (props) => {
  const [roster, setRoster] = useState(null);
  const { teamID } = props;

  //replace fetch local with this url
  const url = `https://api.sportsdata.io/v3/nfl/scores/json/Players/${teamID}?key=${process.env.SPORTSDATA_API_KEY}`;

  useEffect(() => {
    teamID &&
      fetch('Roster.json')
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
