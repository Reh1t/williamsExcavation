import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import Section from "../components/section";
import Section1 from "../components/section1";
import Williams from "../components/williams";
import ProjectsGallery from "../components/projects-gallery";
import Header1 from "../components/header1";
import Footer1 from "../components/footer1";
import router from "next/router";

const WillaimsExcavation: NextPage = () => {
  const onContactButtonClick = useCallback(() => {
    router.push(
      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/new?source=social_media"
    );
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <Header1 />
      <Section />
      <Section1 />
      <Williams />
      <ProjectsGallery />
      <section className="self-stretch bg-ghostwhite flex flex-col items-center justify-center max-w-full text-left text-37xl text-black font-heading-1">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-center flex-wrap content-start py-[52px] px-5 box-border max-w-full">
          <div className="w-[1140px] flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-[390px] box-border gap-x-10 gap-y-9 max-w-full lg:pr-[195px] lg:box-border mq450:pr-5 mq450:box-border mq750:gap-[18px] mq750:pr-[97px] mq750:box-border">
            <div className="h-px flex-1 relative border-lavender border-t-[1px] border-solid box-border min-w-[163px] max-w-full" />
            <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-[34px] mq450:leading-[40px] mq1050:text-[45px] mq1050:leading-[54px]">
              Contact Us
            </h1>
          </div>
        </div>
        <button
          className="cursor-pointer py-10 px-10 ml-10 mb-10 bg-green shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-13xl flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-mediumslateblue hover:bg-deepskyblue hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue"
          onClick={onContactButtonClick}
        >
          <a className="relative text-8xl leading-[25.6px] font-bold font-small-text text-white text-center">
            Contact Us Here
          </a>
        </button>
      </section>
      <Footer1 />
    </div>
  );
};

export default WillaimsExcavation;
