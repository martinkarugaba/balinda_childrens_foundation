import React from 'react';

const Goal = ({ goal, percent }) => {
  return (
    <div className="mt-[1rem]">
      <p className="font-secondary text-lg font-semibold tracking-wide text-primary">
        {goal} Goal
      </p>
      <div className="mt-2 rounded-lg bg-light-grey">
        <div
          style={{ width: `${percent}%` }}
          className={`h-[11px] rounded-lg bg-primary`}
        />
      </div>
    </div>
  );
};

export default Goal;
