import React from 'react';

const Staff = (props) => {
  const { team } = props;

  if (team.HeadCoach) {
    return (
      <>
        <div className="staff-container">
          <h1 className="heading-1">Staff</h1>
          <h2 className="heading-2">
            Head Coach:&nbsp;
            {team.HeadCoach}
          </h2>
          <ul>
            <li>Defensive Coordinator:&nbsp;{team.DefensiveCoordinator}</li>
            <li>Defensive Scheme:&nbsp;{team.DefensiveScheme}</li>
            <li>Offensive Coordinator:&nbsp;{team.OffensiveCoordinator}</li>
            <li>Offensive Scheme:&nbsp;{team.OffensiveScheme}</li>
            <li>Special Teams Coach:&nbsp;{team.SpecialTeamsCoach}</li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <div className="staff-container">
      <h1 className="heading-1">Staff</h1>
    </div>
  );
};

export default Staff;
