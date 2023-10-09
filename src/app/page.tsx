"use client";

import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <button
        onClick={() => setShowModal((prev) => !prev)}
        className="border border-neutral-700 py-1 px-3 rounded-md text-[.8rem]"
      >
        Toggle
      </button>
      <div className=" relative bg-black flex flex-col  items-center justify-center w-[40rem] h-[14rem] border border-neutral-700 overflow-hidden rounded-lg shadow-con">
        <div className="absolute -z-40 bg-black w-full h-full top-0 left-0 "></div>
        <div
          className={`${
            showModal ? "show" : "hide"
          } modal grid absolute top-0 left-0 w-full bg-[#1b1d22] border border-neutral-700 h-full place-content-center `}
        >
          <div className=" w-full h-full ">
            <h1>
              {" "}
              <mark>Congratulations!!!</mark> You've been added to the waitlist.
            </h1>
          </div>
        </div>
        <div className=" absolute p-4 h-[70%] w-[95%] top-[1rem] shadow-xl shadow-black/30 bg-[#0b0c0f]/70 border border-neutral-700 rounded-md backdrop-blur-md flex justify-between flex-col ">
          <input
            className=" w-full outline-none bg-transparent hover:outline-none focus:outline-none"
            type="text"
            placeholder="Jot something down or hit / to get lazy."
          />
          <small className=" py-1 px-2 border text-[.6rem] bg-black/30 backdrop-blur-sm  border-neutral-700 w-fit rounded-2xl">
            Lazy &bull; a capture tool for knowledge
          </small>
        </div>
        <div className=" w-full h-full">
          <section className=" h-[8rem]"></section>
          <hr className=" border-neutral-800" />
          <section className=" h-[6rem] bg-[#171a24] flex   ">
            <div className=" w-[95%] mx-auto py-2  h-fit flex justify-between mt-auto">
              <button>Inbox</button>
              <button className=" border border-neutral-700 py-1 px-3 rounded-md text-[.8rem]">
                Capture
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
