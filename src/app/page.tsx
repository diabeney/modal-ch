"use client";
import { useState, useEffect } from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { LiaLinkSolid } from "react-icons/lia";
import "animate.css";
import ToolTip from "./components/Tooltip";
import Modal from "./components/Modal";
import Dropdown from "./components/Dropdown";
import { DropDownData } from "./data";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(DropDownData);
  const [showDropDown, setShowDropDown] = useState(false);

  function handleSearch(value: string) {
    setSearchQuery(value);
    if (!value.startsWith("/")) {
      setShowDropDown(false);
      setFilteredData(DropDownData);
    }
    if (value.match(/\/\w+?/g)) {
      const match = DropDownData.filter((item) =>
        item.name.match(new RegExp(`${value.replace("/", "")}`, "ig"))
      );
      console.log(value);
      match ? setFilteredData(match) : setFilteredData([]);
    }
  }

  useEffect(() => {
    if (searchQuery === "/") {
      setShowDropDown(true);
      setFilteredData(DropDownData);
    }
  }, [searchQuery]);

  const handleToggleModal = () => setShowModal((isShown) => !isShown);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className=" relative bg-black flex flex-col  items-center justify-center w-screen md:w-[40rem] h-fit border border-neutral-700 overflow-hidden rounded-lg shadow-con">
        <div className="absolute -z-40 bg-black w-full h-full top-0 left-0 "></div>
        <Modal modalState={showModal} toggleModal={handleToggleModal} />
        <div className=" absolute p-4 h-[9rem] w-[95%] top-[1rem] shadow-xl shadow-black/30 bg-[#232428]/70 border border-neutral-500 rounded-md backdrop-blur-md flex justify-between flex-col ">
          <input
            className=" w-full outline-none bg-transparent hover:outline-none focus:outline-none"
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
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
            <div className=" relative w-[95%] mx-auto py-2  h-fit flex justify-between mt-auto">
              <span className=" flex justify-center items-center gap-1">
                <AiOutlineInbox />
                <button>Inbox</button>
              </span>
              <button
                onClick={() => setShowModal((prev) => !prev)}
                className="capture_btn border border-neutral-700 bg-gradient-to-r hover:from-neutral-700 hover:opacity-70 hover:via-neutral-800 btn_animate hover:to-[#1A1B1F] py-1 px-3 rounded-md text-[.8rem]"
              >
                Capture
              </button>
              <ToolTip />
            </div>
          </section>
        </div>
        {showDropDown && <Dropdown data={filteredData} />}
      </div>
    </main>
  );
}
