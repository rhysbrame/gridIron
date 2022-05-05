import React, { useEffect, useState } from 'react';
import TeamSelector from '../components/TeamSelector';
import Stadium from '../components/Stadium';
import Staff from '../components/Staff';
import Schedule from '../components/Schedule';
import News from '../components/News';
import Roster from '../components/Roster';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [chosenTeam, setChosenTeam] = useState({
    Key: 'NFL',
    Name: 'Select an NFL Team',
    PrimaryColor: '808080',
    SecondaryColor: 'FFFFFF',
    TertiaryColor: '000000',
    WikipediaLogoUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg',
    WikipediaWordMarkUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b4/100_NFL_seasons_logo.svg',
  });

  //Webpack/vercel not finding process.env...

  // const TEAMS_URL =
  //   process.env.NODE_ENV.trim() === 'production'
  //     ? 'Teams.json'
  //     : `https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${SPORTSDATA_API_KEY}`;

  const TEAMS_URL =
    'https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=a79947c2b7ac4db7849431550720651c';

  useEffect(() => {
    fetch(TEAMS_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('No Teams data');
        }
        return res.json();
      })
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [TEAMS_URL]);

  // const NFL = {
  //   Key: 'NFL',
  //   Name: 'Select an NFL Team...',
  //   PrimaryColor: '808080',
  //   SecondaryColor: 'FFFFFF',
  //   TertiaryColor: '000000',
  //   WikipediaLogoUrl:
  //     'https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg',
  //   WikipediaWordMarkUrl:
  //     'https://upload.wikimedia.org/wikipedia/en/b/b4/100_NFL_seasons_logo.svg',
  // };

  // teams.unshift(NFL);

  const handleSelectTeam = (e) => {
    const key = e.target.value;
    const selectedTeam = teams.find((team) => {
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
      <div className="main-container">
        <Header data={chosenTeam} />
        <TeamSelector teams={teams} onChange={handleSelectTeam} />
        <News teamID={chosenTeam.Key} />
        <div className="sss-container">
          <Stadium stadium={chosenTeam.StadiumDetails} />
          <Staff team={chosenTeam} />
          <Schedule teamKey={chosenTeam.GlobalTeamID} />
        </div>
        <Roster teamID={chosenTeam.Key} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
