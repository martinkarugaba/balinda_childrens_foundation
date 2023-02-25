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
          className="relative h-[11px] rounded-lg bg-primary"
        >
          <div className="absolute right-[-20px] top-[-30px] flex flex-col justify-center items-center">
            <div className="rounded-lg z-20 bg-primary px-2 py-[4px] font-secondary text-lg leading-[18px] text-off-white">
              {percent}%
            </div>
            <div className="h-[15px] rounded w-[15px] rotate-45 translate-y-[-10px] z-10 bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
