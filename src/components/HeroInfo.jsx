import React from 'react'

const HeroInfo = () => {
  return (
    <div>
      <section className="absolute top-0 left-0 flex h-[100%] w-[100%] items-center justify-start border-2 py-[8rem] px-[10rem]">
        <div className="flex h-[320px] flex-col items-center justify-between">
          <h1 className="text-center text-[4rem] font-bold uppercase  leading-[4rem] text-white drop-shadow-md">
            Empowering the next generation, <br /> achieve a bright
            future
          </h1>
          <div className="h-[5px] w-[70%] bg-orange-300"></div>
          <p className="w-[60ch] text-center text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quia, doloribus tempore omnis mollitia voluptate minima?
            Iure, mollitia molestias laborum ad id nisi suscipit qui
            impedit dolorum.
          </p>
          <div>
            <button className="tex-base rounded border border-orange-300 px-[1rem] py-[0.5rem]">
              Donate
            </button>
            <button className="tex-base rounded border border-orange-300 px-[1rem] py-[0.5rem]">
              Sponsor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroInfo