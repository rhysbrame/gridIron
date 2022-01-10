import React, { useState } from 'react';
import TeamSelector from '../components/TeamSelector';
import Stadium from '../components/Stadium';
import Staff from '../components/Staff';
import Schedule from '../components/Schedule';
import News from '../components/News';
import Roster from '../components/Roster';

// Change this Teams object to a call ot the 3rd party API for up to date information.
import Teams from '../public/Teams.json';

const App = () => {
  const [chosenTeam, setChosenTeam] = useState({
    Name: 'Select an NFL Team',
    PrimaryColor: '808080',
    SecondaryColor: 'FFFFFF',
    TertiaryColor: '000000',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b4/100_NFL_seasons_logo.svg',
  });
  const handleSelectTeam = (e) => {
    const key = e.target.value;
    const selectedTeam = Teams.find((team) => {
      if (team.Key === key) return team;
    });
    setChosenTeam(selectedTeam);
  };

  const teamColor = '#' + chosenTeam.PrimaryColor + '80';
  const teamSecondaryColor = '#' + chosenTeam.SecondaryColor;
  const teamTertiaryColor = '#' + chosenTeam.TertiaryColor;

  return (
    <div
      style={{
        backgroundColor: teamColor,
        color: teamSecondaryColor,
        borderColor: teamTertiaryColor,
        borderStyle: 'solid',
        borderWidth: '3px',
      }}
    >
      <h1 className="heading">#gridIron</h1>
      <h2>{chosenTeam.Name}</h2>
      <img src={chosenTeam.WikipediaLogoUrl} alt="logo" />
      <img src={chosenTeam.WikipediaWordMarkUrl} alt="wordmark" />

      <TeamSelector teams={Teams} onChange={handleSelectTeam} />
      <Stadium stadium={chosenTeam.StadiumDetails} />
      <Staff team={chosenTeam} />
      <Schedule teamKey={chosenTeam.GlobalTeamID} />
      <News teamID={chosenTeam.Key} />
      <Roster teamID={chosenTeam.Key} />
    </div>
  );
};

export default App;
