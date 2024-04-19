import React, { useState } from "react";
import Table from "./Table";
import {
  SpeakerWaveIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import Ball from "../assets/ball.png";
import Ball1 from "../assets/ball1.png";
import Ball2 from "../assets/ball2.png";
import Ball3 from "../assets/ball3.png";
import Ball4 from "../assets/ball4.png";
import Ball5 from "../assets/ball5.png";
import Ball6 from "../assets/ball6.png";
import Ball7 from "../assets/ball7.png";
import Ball8 from "../assets/ball8.png";
import Ball9 from "../assets/ball9.png";
import ClockGray from "../assets/clockgray.png";
import ClockYellow from "../assets/clockyellow.png";
import Wallet from "../assets/wallet.png";
import Path from "../assets/path.png";

const balls = [
  Ball,
  Ball1,
  Ball2,
  Ball3,
  Ball4,
  Ball5,
  Ball6,
  Ball7,
  Ball8,
  Ball9,
];

const Section1 = () => {
  const [active, setActive] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [activeSize, setActiveSize] = useState(0);

  return (
    <>
      <div className="min-h-[40vh] main-section px-5 pt-10 flex flex-col gap-5 mt-14 -z-10">
        <div className="bg-white rounded-3xl flex flex-col items-center justify-center gap-5 py-5 w-full">
          <div className="grid grid-cols-12 items-center w-full">
            <div className="col-span-7 flex flex-row justify-end text-end items-center">
              <span className="text-2xl font-bold">$0.00</span>
            </div>
            <div className="col-span-5 flex flex-row items-center">
              <span className="ml-10">
              <img alt="" src={Path} className="h-[25px] w-[25px] cursor-pointer" />
              </span>
            </div>
          </div>

          <div className="w-full grid grid-cols-12 gap-5">
            <div className="col-span-5 flex flex-row justify-end">
              <img alt="" src={Wallet} className="h-[25px] w-[25px]" />
            </div>
            <div className="col-span-7">
              <span className="text-md font-semibold">Wallet Balance</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row items-center justify-between w-full px-5">
            <button className="transition-all py-2 text-[#ff9901] hover:bg-[#ff9901] px-10 border border-[#ff9901] rounded-full hover:text-white text-xl font-bold">
              Withdraw
            </button>
            <button className="font-bold py-2 px-10 text-xl text-white bg-[#ff9901]  rounded-full">
              Deposite
            </button>
          </div>
        </div>

        <div className="bg-white grid grid-cols-12 items-center gap-3 py-2 px-3 sm:px-5 rounded-xl">
          <div className="col-span-1">
            <SpeakerWaveIcon height={20} width={20} color="orange" />
          </div>
          <div className="col-span-8">
            <p className="text-[10px] sm:text-sm sm:font-semibold text-[#ff9901]">
              Start by creating a new Vite project if you don’t have one set up
              already.
            </p>
          </div>
          <div className="col-span-3 flex flex-row justify-end">
            <button className="px-2 sm:px-3 py-2 bg-[#ff9901] flex flex-row gap-1 sm:gap-2 items-center rounded-full justify-center text-white text-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_589_37755)">
                  <path
                    d="M24 0H0V24H24V0Z"
                    fill="white"
                    fillOpacity="0.01"
                  ></path>
                  <path
                    d="M12 22C16.1173 22 19.4999 18.7371 19.4999 14.5491C19.4999 13.5209 19.4476 12.4187 18.8778 10.7058C18.3079 8.9929 18.1931 8.7718 17.5905 7.71395C17.333 9.8727 15.9555 10.7724 15.6055 11.0413C15.6055 10.7615 14.7722 7.66795 13.5088 5.81695C12.2685 4 10.5817 2.80796 9.59265 2C9.59265 3.53489 9.16095 5.81695 8.5427 6.9797C7.92445 8.14245 7.80835 8.1848 7.0361 9.0501C6.2639 9.9154 5.90945 10.1826 5.2637 11.2325C4.61798 12.2825 4.5 13.6809 4.5 14.7091C4.5 18.8971 7.88265 22 12 22Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_589_37755">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span>Details</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 shadow-2xl bg-white rounded-xl overflow-hidden">
          {[0, 0, 0, 0].map((item, index) => (
            <div
              onClick={() => {
                setActive(index);
              }}
              className={`${
                active === index
                  ? "bg-gradient-to-b from-[#ebab4a] to-white border border-yellow-600 rounded-xl text-yellow-700"
                  : "bg-white text-gray-400"
              } bg-white flex flex-col items-center justify-center h-[7rem]  cursor-pointer text-sm sm:font-semibold`}
              key={index}
            >
              <div className="">
                {active === index ? (
                  <img
                    alt=""
                    src={ClockYellow}
                    className="h-[45px] w-[45px] sm:h-[55px] sm:w-[55px]"
                  />
                ) : (
                  <img
                    alt=""
                    src={ClockGray}
                    className="h-[45px] w-[45px] sm:h-[55px] sm:w-[55px]"
                  />
                )}
              </div>
              <span>Win Go</span>
              <span>{index + 1} Min</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 flex flex-col gap-5 mt-5">
        <div className="grid grid-cols-2 text-white bg-[#ff9901] rounded-xl w-full py-4">
          <div className="flex flex-col gap-2 border-r px-3">
            <button className="hover:bg-white hover:text-[#ff9901] transition-all w-full border border-white text-white text-center rounded-full flex flex-row items-center justify-center gap-2 py-1">
              <BookmarkIcon height={18} width={18} />
              <span>How to play</span>
            </button>
            <span>Win Go 1Min</span>
            <div className="grid grid-cols-5 gap-2">
              {balls.slice(0, 5).map((item, index) => {
                return (
                  <div key={index} className="">
                    <img className="w-20" alt="" src={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-end px-3 gap-2">
            <span className="text-sm sm:text-lg font-bold">Time Remaining</span>
            <div className="grid grid-cols-5 gap-2">
              {[0, 0, 0, 0, 0].map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <div
                      className={`${
                        index === 0
                          ? "rounded-tl-xl"
                          : index === 4
                          ? "rounded-br-xl"
                          : ""
                      } bg-white px-1 py-1 flex flex-col items-center justify-center text-black`}
                      key={index}
                    >
                      <span className="text-lg sm:text-3xl font-bold text-red-500">
                        {index === 2 ? ":" : 0}
                      </span>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <span className="text-md sm:text-xl font-bold">20240418010204</span>
          </div>
        </div>

        <div className="px-3 py-5 rounded-xl bg-white flex flex-col gap-5">
          <div className="grid grid-cols-3 gap-1 sm:gap-10">
            <button className="bg-[#40ad72] rounded-tr-lg rounded-bl-lg px-7 py-2 md:py-3 md:px-9 md:text-xl font-bold text-white text-center">
              Green
            </button>
            <button className="bg-[#b659fe] rounded-lg px-7 py-2 md:py-3 md:px-9 md:text-xl font-bold text-white text-center">
              Violet
            </button>
            <button className="bg-[#fd565c] rounded-tl-lg rounded-br-lg px-7 py-2 md:py-3 md:px-9 md:text-xl font-bold text-white text-center">
              Red
            </button>
          </div>

          <div className="grid grid-cols-5 bg-[#eee] p-3 rounded-lg gap-3">
            {balls.map((item, index) => {
              return (
                <div className="" key={index}>
                  <img alt="" src={item} className="w-20" />
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-12 items-center gap-2">
            <div className="col-span-3">
              <button className="w-full border rounded-lg text-sm sm:text-xl font-bold border-[#ff9901] text-[#ff9901] hover:bg-[#ff9901] hover:text-white transition-all px-1 py-2 sm:px-3">
                Random
              </button>
            </div>
            <div className="col-span-9 grid grid-cols-6 gap-1 sm:gap-2">
              {["X1", "X5", "X10", "X20", "X50", "X100"].map((_, index) => {
                return (
                  <div
                    onClick={() => {
                      setActiveSize(index);
                    }}
                    className={`px-0.5 py-2 text-sm sm:text-lg sm:px-2 sm:py-2 ${
                      activeSize === index
                        ? "bg-[#40ad72] text-white"
                        : " bg-gray-200"
                    } lg:cols-span-2 col-span-1 rounded-lg  cursor-pointer text-center`}
                    key={index}
                  >
                    <span>{_}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2">
            <button className="bg-[#ffa82e] px-2 py-3 rounded-tl-full rounded-bl-full text-xl font-bold text-white">
              Big
            </button>
            <button className="bg-[#6da7f4] px-2 py-3 rounded-tr-full rounded-br-full text-xl font-bold text-white">
              Small
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between gap-1 sm:gap-2 md:gap-4">
            <button
              onClick={() => {
                setActiveTab(1);
              }}
              className={`${
                activeTab === 1
                  ? "bg-gradient-to-b from-[#E57201] to-[#E57201] text-white"
                  : "bg-[#e8e7e8] text-black"
              } rounded-lg  px-5 sm:px-8 py-2.5 text-sm sm:font-semibold md:text-xl`}
            >
              Game History
            </button>
            <button
              onClick={() => {
                setActiveTab(2);
              }}
              className={`${
                activeTab === 2
                  ? "bg-gradient-to-b from-[#E57201] to-[#E57201] text-white"
                  : "bg-[#e8e7e8] text-black"
              } rounded-lg  px-6 sm:px-8 py-2.5 text-sm sm:font-semibold md:text-xl`}
            >
              Chart
            </button>
            <button
              onClick={() => {
                setActiveTab(3);
              }}
              className={`${
                activeTab === 3
                  ? "bg-gradient-to-b from-[#E57201] to-[#E57201] text-white"
                  : "bg-[#e8e7e8] text-black"
              } rounded-lg  px-6 sm:px-8 py-2.5 text-sm sm:font-semibold md:text-xl`}
            >
              Green
            </button>
          </div>
        </div>
      </div>

      <Table />
    </>
  );
};

export default Section1;
