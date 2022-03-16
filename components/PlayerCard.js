import React from 'react';

const PlayerCard = (props) => {
  const { player } = props;
  console.log(player);
  return (
    <div className="player-card" key={player.PlayerID}>
      <img className="player-img" src={player.PhotoUrl} alt="player photo" />
      <p>{player.Number}</p>
      <h4 className="heading-4">{player.Name}</h4>
      <p>{player.College}</p>
      <p>{player.Position}</p>
      <button className="view-player-btn">View</button>
    </div>
  );
};

export default PlayerCard;
