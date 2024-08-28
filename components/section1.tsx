import type { NextPage } from "next";

export type Section1Type = {
  className?: string;
};

const Section1: NextPage<Section1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-0 px-10 box-border max-w-full shrink-0 text-left text-base text-white font-body-body-2-30-space ${className}`}
    >
      <div className="w-[611px] bg-dark-blue flex flex-col items-start justify-start py-4 pl-16 pr-5 box-border gap-2 max-w-full mq750:pl-8 mq750:box-border">
        <div className="relative tracking-[0.3em] leading-[24px] inline-block min-w-[75px]" data-scroll-to="about">
          ABOUT
        </div>
        <h1 className="m-0 relative text-25xl leading-[60px] inline-block max-w-full font-heading-1 mq450:text-7xl mq450:leading-[36px] mq1050:text-16xl mq1050:leading-[48px]">
          <span>{`WILLIAMS `}</span>
          <b>EXCAVATION</b>
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start max-w-full text-justify text-xl text-black font-work-sans">
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center py-0 px-[38px] box-border gap-[108px] max-w-full mq450:gap-[27px] mq750:gap-[54px]">
          <div className="flex-1 flex flex-row items-start justify-start min-w-[335px] max-w-full">
            <div className="flex-1 relative tracking-[-0.02em] inline-block max-w-full mq450:text-base">
              Equipped with cutting-edge technology, we ensure every job is
              completed with precision and care. Understanding that no two
              projects are the same, we work closely with our clients to bring
              their ideas to life. Whether you’re looking for basic landscaping
              or require complex excavation work, you can rely on us for
              outstanding, reliable service every step of the way.
            </div>
          </div>
          <img
            className="h-[436px] w-[525px] object-cover max-w-full"
            alt=""
            src="/ornament-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
