import React from 'react';

const Staff = (props) => {
  const { team } = props;

  if (team.HeadCoach) {
    return (
      <>
        <div className="staff-container">
          <h1 className="heading-1">Staff</h1>
          <h3 className="staff-container__head-title">
            Head Coach:&nbsp;{team.HeadCoach}
          </h3>
          <h5 className="staff-container__coach-title">
            Defensive Coordinator:&nbsp;{team.DefensiveCoordinator}
          </h5>
          <h5 className="staff-container__coach-title">
            Defensive Scheme:&nbsp;{team.DefensiveScheme}
          </h5>
          <h5 className="staff-container__coach-title">
            Offensive Coordinator:&nbsp;{team.OffensiveCoordinator}
          </h5>
          <h5 className="staff-container__coach-title">
            Offensive Scheme:&nbsp;{team.OffensiveScheme}
          </h5>
          <h5 className="staff-container__coach-title">
            Special Teams Coach:&nbsp;{team.SpecialTeamsCoach}
          </h5>
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
