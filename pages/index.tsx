import type { NextPage } from "next";
import { useEffect } from "react";
import Section from "../components/section";
import Section1 from "../components/section1";
import Williams from "../components/williams";
import ProjectsGallery from "../components/projects-gallery";
import Header1 from "../components/header1";
import Footer1 from "../components/footer1";

const WillaimsExcavation: NextPage = () => {
  useEffect(() => {
    // Load the script
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "c6ab68fa-74c2-4d46-9066-ff2210b88264");
    script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/embedded_work_request_form");
    document.body.appendChild(script);

    script.onload = () => {
      // Apply Tailwind CSS classes to the embedded form elements once the script is loaded
      const form = document.getElementById("c6ab68fa-74c2-4d46-9066-ff2210b88264");

      if (form) {
        form.classList.add("bg-white", "p-6", "rounded-lg", "shadow-md", "max-w-lg", "mx-auto", "my-8");

        const inputs = form.querySelectorAll("input, textarea, select");
        inputs.forEach((input) => {
          input.classList.add(
            "w-full",
            "px-4",
            "py-2",
            "mb-4",
            "border",
            "border-gray-300",
            "rounded",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500"
          );
        });

        const labels = form.querySelectorAll("label");
        labels.forEach((label) => {
          label.classList.add("block", "text-sm", "font-medium", "text-gray-700", "mb-2");
        });

        const buttons = form.querySelectorAll("button");
        buttons.forEach((button) => {
          button.classList.add(
            "bg-blue-500",
            "text-white",
            "px-4",
            "py-2",
            "rounded",
            "hover:bg-blue-600",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-blue-500"
          );
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-5 leading-[normal] tracking-[normal]">
      <Header1 />
      <Section />
      <Section1 />
      <Williams />
      <ProjectsGallery />
      <section className="self-stretch bg-ghostwhite flex flex-col items-start justify-start max-w-full text-left text-37xl text-black font-heading-1">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-center flex-wrap content-start py-[83px] px-5 box-border max-w-full">
          <div className="w-[1140px] flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-[390px] box-border gap-x-10 gap-y-9 max-w-full lg:pr-[195px] lg:box-border mq450:pr-5 mq450:box-border mq750:gap-[18px] mq750:pr-[97px] mq750:box-border">
            <div className="h-px flex-1 relative border-lavender border-t-[1px] border-solid box-border min-w-[163px] max-w-full" />
            <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-[34px] mq450:leading-[40px] mq1050:text-[45px] mq1050:leading-[54px]">
              Contact Us
            </h1>
          </div>
        </div>
        <div id="c6ab68fa-74c2-4d46-9066-ff2210b88264"></div>
      </section>
      <Footer1  />

    </div>
  );
};

export default WillaimsExcavation;
