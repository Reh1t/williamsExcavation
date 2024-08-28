import type { NextPage } from "next";

export type ProjectsGalleryType = {
  className?: string;
};

const ProjectsGallery: NextPage<ProjectsGalleryType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-center gap-2.5 max-w-full shrink-0 text-left text-45xl text-black font-heading-1 ${className}`}
    >
      <h1 className="m-0 relative text-inherit font-bold font-[inherit] inline-block max-w-full box-border mq450:text-19xl mq1050:text-32xl"
      data-scroll-to='projects'
      >
        Project Gallery
      </h1>
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center max-w-full">
        <div className="flex-1 flex flex-col items-center justify-start box-border gap-0 max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center box-border gap-2 mx-auto pb-2">
            <div className="h-[960.8px] w-[600px] flex flex-col items-center justify-start box-border gap-2 max-w-full">
              <img
                className="self-stretch h-[445.4px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/williams-excavation07@2x.png"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/williams-excavation-03@2x.png"
              />
            </div>
            <div className="w-[400px] flex flex-row items-center justify-start py-0 box-border max-w-full">
              <img
                className="h-[960.8px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/williamsexcavation14@2x.png"
              />
            </div>
            <div className="h-[960.8px] w-[300px] flex flex-col items-center justify-center pt-0 pb-[2px] gap-2 box-border max-w-full">
              <img
                className="self-stretch h-[465.9px] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/williams-excavation-03-1@2x.png"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/williams-excavation02@2x.png"
              />
            </div>
          </div>

          <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center py-0 px-1.5 box-border gap-2 max-w-full shrink-0">
            <div className="w-[710px] flex flex-row items-center justify-center flex-wrap content-center py-0 box-border gap-2 max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[139px] min-h-[466px]"
                loading="lazy"
                alt=""
                src="/williams-excavation-01@2x.png"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[139px] min-h-[466px]"
                loading="lazy"
                alt=""
                src="/williams-excavation11@2x.png"
              />
            </div>
            <img
              className="self-stretch w-[650px] relative max-h-full object-cover min-h-[466px] max-w-full"
              loading="lazy"
              alt=""
              src="/williams-excavation08@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
