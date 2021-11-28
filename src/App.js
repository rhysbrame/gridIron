import React from 'react';
import TeamSelector from '../components/TeamSelector';
// Change this Teams object to a call ot the 3rd party API for up to date information.
import Teams from '../Data/Teams.json';

const App = () => {
  return (
    <div>
      <h1 className="heading">#gridIron</h1>
      <TeamSelector teams={Teams} />
    </div>
  );
};

export default App;
