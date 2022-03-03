import React, { useState } from 'react';
import TeamSelector from '../components/TeamSelector';
import Stadium from '../components/Stadium';
import Staff from '../components/Staff';
import Schedule from '../components/Schedule';
import News from '../components/News';
import Roster from '../components/Roster';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

  const teamColor = '#' + chosenTeam.PrimaryColor;
  const teamSecondaryColor = '#' + chosenTeam.SecondaryColor;
  const teamTertiaryColor = '#' + chosenTeam.TertiaryColor;

  document.documentElement.style.setProperty('--team-primary-color', teamColor);
  document.documentElement.style.setProperty(
    '--team-secondary-color',
    teamSecondaryColor
  );
  document.documentElement.style.setProperty(
    '--team-tertiary-color',
    teamTertiaryColor
  );

  return (
    <div className="background-container">
      <div className="container">
        <Header data={chosenTeam} />
        <TeamSelector teams={Teams} onChange={handleSelectTeam} />
        <Schedule teamKey={chosenTeam.GlobalTeamID} />
        <Stadium stadium={chosenTeam.StadiumDetails} />
        <Staff team={chosenTeam} />
        <News teamID={chosenTeam.Key} />
        <Roster teamID={chosenTeam.Key} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
