import type { NextPage } from "next";

export type WilliamsType = {
  className?: string;
};

const Williams: NextPage<WilliamsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-tan overflow-hidden flex flex-col items-center justify-center py-10 px-0 box-border gap-10 max-w-full shrink-0 text-center text-25xl text-white font-heading-1 mq750:gap-5 mq750:pt-[26px] mq750:pb-[26px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border max-w-full" data-scroll-to='services'>
        <h1 className="m-0 relative text-inherit leading-[60px] font-bold font-[inherit] inline-block max-w-full mq450:text-7xl mq450:leading-[36px] mq1050:text-16xl mq1050:leading-[48px]">
          Explore our full range of excavation services below
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start py-0 px-[77px] box-border gap-[30px] min-h-[386px] max-w-full text-left text-xl text-black lg:pl-[38px] lg:pr-[38px] lg:box-border mq750:gap-[15px]">
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] whitespace-nowrap">
          <div className="relative leading-[26.67px]">
            Septic System Installation
          </div>
        </div>
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] whitespace-nowrap">
          <div className="relative">Land and Tree Clearing</div>
        </div>
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] whitespace-nowrap">
          <div className="relative leading-[26.67px]">
            Retaining Wall Construction
          </div>
        </div>
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] box-border whitespace-nowrap max-w-full">
          <div className="relative">Basement and Pond Excavations</div>
        </div>
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] whitespace-nowrap">
          <div className="relative leading-[26.67px]">
            Gravel Pad Preparation
          </div>
        </div>
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] box-border whitespace-nowrap max-w-full">
          <div className="relative leading-[26.67px]">
            Site Development for New Homes
          </div>
        </div>
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] box-border whitespace-nowrap max-w-full">
          <div className="relative leading-[26.67px]">
            Driveway Installation and Grading
          </div>
        </div>
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] box-border whitespace-nowrap max-w-full">
          <div className="relative leading-[26.67px]">
            Foundation Repair and Waterproofing
          </div>
        </div>
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] box-border whitespace-nowrap max-w-full">
          <div className="h-[26px] relative inline-block">
            Culvert and Entrance Installation
          </div>
        </div>
        <div className="rounded-11xl bg-white overflow-hidden flex flex-row items-center justify-center py-6 px-[23px] box-border whitespace-nowrap max-w-full">
          <div className="relative leading-[26.67px]">
            Ditching and Tile Drainage Solutions
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-6 bg-white rounded-11xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro">
          <div className="relative text-xl font-heading-1 text-black text-left">
            Demolition Services
          </div>
        </button>
      </div>
    </section>
  );
};

export default Williams;
