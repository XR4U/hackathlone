import React from "react";
import Image from "next/image";
import Rocket from "@/assets/images/general/landing-page/rocket.svg";
import { AgenciesSlider } from "./agencies-slider";

const SpaceAgencies = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className=" TabletScreen:hidden MobileScreen:hidden flex flex-row gap-[36px] mx-[8.06%]">
        <div className="lg:w-1/2 w-full mb-[20%] mt-[3%] ml-[2rem]">
          <h1 className="font-[700] text-[42px] text-hackathone-font-rocket-red my-2 pb-[0.5rem]">
            Space Agencies
          </h1>
          <div className="mr-[3rem]">
            <p className="font-hackathoneCabinetGrotesk text-[18px] leading-[1.8rem] text-left">
              <span className="text-hackathone-font-rocket-red font-[600]">NASA</span> teamed up with 13 space agency partners in 2023. This year, they’ve expanded to <span className="text-hackathone-font-rocket-red font-[600]">15 agencies</span> to bring the largest global hackathon to communities worldwide! Together with <span className="text-hackathone-font-rocket-red font-[600]">NASA’s Earth Science Division</span>, these agencies have crafted unique problem statements across various domains, from agrotech and biotech to software, the arts, and more. They provide access to data and resources related to Earth observations to help participants tackle these challenges.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full text-center">
          <AgenciesSlider />
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden flex flex-col items-center justify-center gap-[36px] mx-[4.06%]">
        <div className="w-full mt-[3%]">
          <h1 className="font-[700] text-[32.99px] text-hackathone-font-rocket-red my-2">
            Space Agencies
          </h1>
          <p className="font-hackathoneCabinetGrotesk font-[400] text-[18px] leading-[30.57px] pr-[12.7%]">
            <span className="text-hackathone-font-rocket-red font-[600]">NASA</span> teamed up with 13 space agency partners in 2023. This year, they’ve expanded to <span className="text-hackathone-font-rocket-red font-[600]">15 agencies</span> to bring the largest global hackathon to communities worldwide! Together with <span className="text-hackathone-font-rocket-red font-[600]">NASA’s Earth Science Division</span>, these agencies have crafted unique problem statements across various domains, from agrotech and biotech to software, the arts, and more. They provide access to data and resources related to Earth observations to help participants tackle these challenges.
          </p>
        </div>
        <div className="w-full mb-[20%]">
          <AgenciesSlider />
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden flex flex-col items-center justify-center mx-[1.2rem]">
        <div className="w-full mt-[3%]">
          <h1 className="font-[800] text-[30.99px] leading-[44.62px] text-hackathone-font-rocket-red font-hackathoneCabinetGrotesk my-2 pb-[0.5rem]">
            Space Agencies
          </h1>
        </div>
        <p className="font-hackathoneCabinetGrotesk text-slate-50 font-[500] text-[16px] leading-[30.57px] pr-[8.7%]">
          <span className="text-hackathone-font-rocket-red font-[500]">NASA</span> teamed up with 13 space agency partners in 2023. This year, they’ve expanded to <span className="text-hackathone-font-rocket-red font-[500]">15 agencies</span> to bring the largest global hackathon to communities worldwide! Together with <span className="text-hackathone-font-rocket-red font-[500]">NASA’s Earth Science Division</span>, these agencies have crafted unique problem statements across various domains, from agrotech and biotech to software, the arts, and more. They provide access to data and resources related to Earth observations to help participants tackle these challenges.

        </p>
        <div className="w-full mb-[20%] mt-[1.5rem]">
          <AgenciesSlider />
        </div>
      </div>
    );
  };
  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
};

export default SpaceAgencies;
