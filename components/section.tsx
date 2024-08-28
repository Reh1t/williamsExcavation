import type { NextPage } from "next";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-row items-start justify-end flex-wrap content-start py-5 px-10 box-border min-h-[650px] max-w-full shrink-0 text-left text-45xl text-dark-blue font-heading-1 mq750:pb-5 mq750:box-border ${className}`}
    >
      <header className="self-stretch flex flex-col items-center justify-start max-w-full text-justify text-xl text-black font-work-sans">
        <img
          className="h-[50.7px] w-[50.7px] relative object-cover"
          loading="lazy"
          alt=""
          src="/williams20logo3transparent20bgroundpng@2x.png"
        />
        <b className="relative leading-[32px] whitespace-nowrap mq450:hidden">{`by Williams Excavation & Aggregate`}</b>
      </header>
      <div className="w-[1360px] flex flex-row items-start justify-center flex-wrap content-start max-w-full">
        <div className="flex-1 flex flex-row items-center justify-center flex-wrap content-center gap-x-[108px] gap-y-[106px] max-w-full mq450:gap-[26px] mq750:gap-[53px]">
          <img
            className="h-[559px] w-[525px] object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/ornament@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[335px] max-w-full mq750:gap-[18px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[60px] font-bold font-[inherit] mq450:text-19xl mq450:leading-[36px] mq1050:text-32xl mq1050:leading-[48px]">
              <p className="m-0">{`Welcome to `}</p>
              <p className="m-0">{`WILLIAMS EXCAVATION & AGGREGATE`}</p>
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start text-justify text-base-8 text-gray font-body-body-2-30-space">
              <div className="self-stretch relative leading-[26px]">{`At Williams Excavation & Aggregate we specialise in delivering top-tier excavation and landscaping services, whether your project is large or small. From preparing land for a new construction project to designing and implementing beautiful landscapes, our experienced team is here to help.`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
