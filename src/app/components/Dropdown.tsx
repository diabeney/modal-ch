"use client";
import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { BsAlt } from "react-icons/bs";
import { PiCommandLight } from "react-icons/pi";
import Button from "./DropdownButton";

export default function Dropdown({
  data,
}: {
  data: { name: string; id: number; icon: React.ReactNode[] }[];
}) {
  return (
    <div className=" bg-[#191A1E] dropdown w-screen md:w-[40rem] py-3 overflow-y-scroll h-[14rem] border border-neutral-700 overflow-hidden rounded-b-lg ">
      <p className=" pl-6 py-2 text-[.6rem] text-neutral-500">STYLE</p>
      <div className=" text-sm flex flex-col gap-1">
        {data.map((item, index) => {
          return (
            <section
              key={index}
              className="hover:border-l-2 hover:border-l-white w-full px-3"
            >
              <ul className="  flex px-4 justify-between items-center hover:bg-black/30 py-1 hover:backdrop-blur-sm  hover:outline-1 hover:outline hover:outline-neutral-700 w-full rounded-md">
                <li>
                  <span className=" flex items-center gap-1 justify-center">
                    {item.icon.map((icon) => icon)}
                    <p>{item.name}</p>
                  </span>
                </li>
                <li>
                  <span className=" flex justify-center items-center gap-1">
                    <Button>
                      <PiCommandLight />
                    </Button>
                    <Button>
                      <BsAlt />
                    </Button>
                  </span>
                </li>
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
