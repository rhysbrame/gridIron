import React from 'react';

const Staff = (props) => {
  const { team } = props;
  return (
    <>
      <div className="staff-container">
        <h1 className="heading-1">Staff</h1>
        <h3>
          Head Coach:&nbsp;
          {team.HeadCoach}
        </h3>
        <h5>Defensive Coordinator:&nbsp;{team.DefensiveCoordinator}</h5>
        <h5>Offensive Coordinator:&nbsp;{team.OffensiveCoordinator}</h5>
        <h5>Special Teams Coach:&nbsp;{team.SpecialTeamsCoach}</h5>
      </div>
    </>
  );
};

export default Staff;
