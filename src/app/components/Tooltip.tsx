"use client";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiCommandLight } from "react-icons/pi";
import { AiOutlineEnter } from "react-icons/ai";
import { BsAlt } from "react-icons/bs";

export default function ToolTip() {
  return (
    <div className=" tip absolute bottom-[20%] gap-2 right-4 p-4 w-[15rem] backdrop-blur-sm saturate-50 border bg-[#1A1B1F]/70 border-neutral-400 rounded-md z-[60]">
      <section className=" text-sm text-neutral-400 flex justify-between">
        <span className=" flex justify-center items-center gap-1">
          <p>
            <AiOutlineThunderbolt />
          </p>
          <p>Capture</p>
        </span>
        <span className=" flex justify-center items-center">
          <p>
            <PiCommandLight />
          </p>
          <p>
            <AiOutlineEnter />
          </p>
        </span>
      </section>
      <section className=" text-sm text-neutral-400 flex justify-between">
        <span className=" flex justify-center items-center gap-1">
          <p className=" border border-neutral-500  w-4 h-4 rounded-full bg-neutral-900  "></p>
          <p>Capture as a Task</p>
        </span>
        <span className=" flex justify-center items-center">
          <p>
            <BsAlt />
          </p>
          <p>
            <AiOutlineEnter />
          </p>
        </span>
      </section>
    </div>
  );
}
