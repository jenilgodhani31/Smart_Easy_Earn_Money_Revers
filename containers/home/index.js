"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "@components/model";
import Ads from "@components/Ads";



function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Ensures that the component only renders client-side content after hydration
    setIsClient(true);
  }, [isClient]);

  return (


    <Fragment >

      <div className="text-center bg-primary1 p-5 rounded-b-[30px] shadow-2xl ">
        {"Smart & Easy Earn Money"}
      </div>
      <div className="p-5 pt-10">
        <Ads
          data-ad-format="auto"
          data-ad-slot="6816460021"
          data-full-width-responsive="true"
        />
      </div>
      <div className="flex flex-col gap-12 p-5 pt-[80px] items-center justify-center pb-[400px] text-black bg-white ">
        <img src="/assets/images/homePage/homePage.png"
          className="w-[100px] h-[100px]"
        />
        <div className="text-center">{"Are you genuinely interested in making money from the comfort of your home without any initial investment? Discover practical strategies for earning money online without the need for upfront capital."}</div>

        <a href="/emoney" className="w-full">
          <button className="flex items-center justify-center w-full p-5 text-white gap-3 rounded-[15px] bg-primary1 shadow-xl/20 transition-shadow duration-300">
            {"Let's Start"}
            <span>
              <img
                src="/assets/images/homePage/money.png"
                className="w-[30px] h-[30px]"
                alt="money icon"
              />
            </span>
          </button>
        </a>
        <a href="/disclaimer">
          <div className="flex justify-center   pb-5">
            <div className=" text-[15px] font-bold text-black text-center w-fit">
              Disclaimer
            </div>
          </div>
        </a>

      </div>

      {isClient && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className=" md:mt-[18px] mt-[20px]">

            <Ads display={true} data-ad-slot="6220180766" />
          </div>
        </Modal>
      )}


    </Fragment>



  );
}

export default Home;
