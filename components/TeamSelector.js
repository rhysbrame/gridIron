import React from 'react';

const TeamSelector = (props) => {
  const { teams } = props;
  return (
    <>
      <label htmlFor="team-select">Choose a team:</label>
      <select name="teams" id="team-select">
        <option value="choose" key="O">
          Choose a Team
        </option>
        {teams.map((team) => {
          const { Key, Name } = team;
          return (
            <option value={Key} key={Key}>
              {Name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default TeamSelector;
