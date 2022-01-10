import React from 'react';

const TeamSelector = (props) => {
  const { teams, onChange } = props;

  return (
    <>
      <div className="selector-container">
        <label htmlFor="team-select">Choose a Team: </label>
        <br></br>
        <select name="teams" id="team-select" onChange={onChange}>
          <option>Select a Team...</option>
          {teams.map((team) => {
            const { Key, Name, City } = team;
            return (
              <option value={Key} key={Key}>
                {City} {Name}
              </option>
            );
          })}
        </select>
        <br></br>
      </div>
    </>
  );
};

export default TeamSelector;
