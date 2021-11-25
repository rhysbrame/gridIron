import React from 'react';

const App = () => {
  return (
    <div>
      <h1 className="heading">#gridIron</h1>
      <label htmlFor="team-select">Choose a team:</label>
      <select name="pets" id="team-select">
        <option value="0">--Please choose an option--</option>
        <option value="1">Ravens</option>
        <option value="2">Browns</option>
        <option value="3">Bills</option>
        <option value="4">Panthers</option>
        <option value="5">Patriots</option>
        <option value="6">Cowboys</option>
        <option value="7">Giants</option>
      </select>
    </div>
  );
};

export default App;
