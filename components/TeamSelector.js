import React from 'react';

const TeamSelector = (props) => {
  const { teams, onChange } = props;

  return (
    <>
      <div className="selector-container">
        <select
          className="select-team"
          name="teams"
          id="select-team"
          onChange={onChange}
        >
          {teams.map((team) => {
            const { Key, Name, City } = team;
            return (
              <option value={Key} key={Key}>
                {City} {Name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default TeamSelector;
