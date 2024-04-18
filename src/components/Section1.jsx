import React, { useState } from "react";
import Table from "./Table";
import {
  ArrowPathRoundedSquareIcon,
  WalletIcon,
  SpeakerWaveIcon,
  ClockIcon,
  BookmarkIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import Ball from "../assets/ball.png";

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
                <ArrowPathRoundedSquareIcon
                  height={22}
                  width={22}
                  color="gray"
                />
              </span>
            </div>
          </div>

          <div className="w-full grid grid-cols-12 gap-5">
            <div className="col-span-5 flex flex-row justify-end">
              <WalletIcon color="orange" height={25} width={25} />
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
            <button className="px-2 sm:px-3 py-2 bg-[#ff9901] flex flex-row gap-2 rounded-full justify-center text-white text-sm">
              <span>Details</span>
              <FireIcon height={20} width={20} color="white" />
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
                  ? "bg-gradient-to-b from-[#ff9901] to-white border border-yellow-600 rounded-xl text-yellow-700"
                  : "bg-white text-gray-400"
              } bg-white flex flex-col items-center justify-center h-[7rem]  cursor-pointer text-sm sm:font-semibold`}
              key={index}
            >
              <div className="">
                <ClockIcon
                  className="h-[45px] w-[45px] sm:h-[55px] sm:w-[55px]"
                  color={active === index ? "white" : "text-gray-400"}
                />
              </div>
              <span>Win Go</span>
              <span>1 Min</span>
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
              {[0, 0, 0, 0, 0].map((item, index) => {
                return (
                  <div key={index} className="">
                    <img className="w-20" alt="" src={Ball} />
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
            <button className="bg-green-600 rounded-tr-lg rounded-bl-lg px-8 py-2 font-bold text-white text-center">
              Green
            </button>
            <button className="bg-purple-600 rounded-lg px-8 py-2 font-bold text-white text-center">
              Violet
            </button>
            <button className="bg-red-500 rounded-tl-lg rounded-br-lg px-8 py-2 font-bold text-white text-center">
              Red
            </button>
          </div>

          <div className="grid grid-cols-5 bg-[#eee] p-3 rounded-lg gap-3">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => {
              return (
                <div className="" key={index}>
                  <img alt="" src={Ball} className="w-20" />
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-12 items-center gap-2">
            <div className="col-span-12 xl:col-span-3">
              <button className="w-full border rounded-lg text-xl font-bold border-[#ff9901] text-[#ff9901] hover:bg-[#ff9901] hover:text-white transition-all py-2 px-3">
                Random
              </button>
            </div>
            <div className="col-span-12 xl:col-span-9 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2">
              {[0, 0, 0, 0, 0, 0].map((_, index) => {
                let count = 0;
                return (
                  <div
                    onClick={() => {
                      setActiveSize(index);
                    }}
                    className={`p-2 ${
                      activeSize === index ? "bg-green-400 text-white" : " bg-gray-200"
                    } lg:cols-span-2 col-span-1 rounded-lg cursor-pointer text-center`}
                    key={index}
                  >
                    <span>XL{(count += 10)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2">
            <button className="bg-[#ff9901] px-2 py-3 rounded-tl-full rounded-bl-full text-xl font-bold text-white">
              Big
            </button>
            <button className="bg-blue-400 px-2 py-3 rounded-tr-full rounded-br-full text-xl font-bold text-white">
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
                  ? "bg-[#ff9901] text-white"
                  : "bg-[#e8e7e8] text-black"
              } rounded-lg  px-6 sm:px-8 py-2.5 text-sm sm:font-semibold`}
            >
              Game History
            </button>
            <button
              onClick={() => {
                setActiveTab(2);
              }}
              className={`${
                activeTab === 2
                  ? "bg-[#ff9901] text-white"
                  : "bg-[#e8e7e8] text-black"
              } rounded-lg  px-6 sm:px-8 py-2.5 text-sm sm:font-semibold`}
            >
              Chart
            </button>
            <button
              onClick={() => {
                setActiveTab(3);
              }}
              className={`${
                activeTab === 3
                  ? "bg-[#ff9901] text-white"
                  : "bg-[#e8e7e8] text-black"
              } rounded-lg  px-6 sm:px-8 py-2.5 text-sm sm:font-semibold`}
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
