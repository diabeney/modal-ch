"use client";

import { useState } from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { LiaLinkSolid } from "react-icons/lia";
import { RxUpdate } from "react-icons/rx";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className=" relative bg-black flex flex-col  items-center justify-center w-[40rem] h-[14rem] border border-neutral-700 overflow-hidden rounded-lg shadow-con">
        <div className="absolute -z-40 bg-black w-full h-full top-0 left-0 "></div>
        <div
          className={`${
            showModal ? "show" : "hide"
          } modal grid grid-rows-2 gap-[1.2px] absolute top-0 left-0 w-full bg-[#0e0e0e] h-full place-content-center `}
        >
          <button
            onClick={() => setShowModal((prev) => !prev)}
            className=" absolute right-4 text-[#8a8c93] rotate-90 top-4"
          >
            <RxUpdate size={14} />
          </button>
          <section className="bg-[#212226] flex justify-center items-center text-xl ">
            Request access to see your capture on the other side.
          </section>
          <section className="bg-[#1A1B1F] flex items-center gap-4 justify-center w-[40rem] border-t border-t-neutral-700">
            <form>
              <input
                className="lazy_input border-none rounded-md px-4 color-[#8a8c93] h-fit"
                type="text"
                placeholder="@ Join our waitlist with your email"
              />
            </form>
            <button>Get Lazy</button>
          </section>
        </div>
        <div className=" absolute p-4 h-[70%] w-[95%] top-[1rem] shadow-xl shadow-black/30 bg-[#232428]/70 border border-neutral-500 rounded-md backdrop-blur-md flex justify-between flex-col ">
          <input
            className=" w-full outline-none bg-transparent hover:outline-none focus:outline-none"
            type="text"
            placeholder="Jot something down or hit / to get lazy."
          />
          <span className=" py-1 px-3 text-slate-300 border  bg-black/30 backdrop-blur-sm  border-neutral-700 w-fit rounded-2xl flex justify-center items-center gap-1">
            <LiaLinkSolid />
            <small className=" text-[.8rem] ">
              Lazy &bull; a capture tool for knowledge
            </small>
          </span>
        </div>
        <div className=" w-full h-full">
          <section className=" h-[8rem] bg-[#141417]/90 "></section>
          <hr className=" border-neutral-800" />
          <section className=" h-[6rem] bg-[#191A1E] flex   ">
            <div className=" w-[95%] mx-auto py-2  h-fit flex justify-between mt-auto">
              <span className=" flex justify-center items-center gap-1">
                <AiOutlineInbox />
                <button>Inbox</button>
              </span>
              <button
                onClick={() => setShowModal((prev) => !prev)}
                className=" border border-neutral-700 py-1 px-3 rounded-md text-[.8rem]"
              >
                Capture
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
