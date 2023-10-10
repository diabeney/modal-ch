"use client";
import { RxUpdate } from "react-icons/rx";

type ModalProps = {
  modalState: boolean;
  toggleModal: () => void;
};

export default function Modal({ modalState, toggleModal }: ModalProps) {
  return (
    <div
      className={`${
        modalState ? " show animate__zoomIn animate__fast" : "hide"
      } modal animate__animated grid grid-rows-2 gap-[1px] absolute top-0 left-0 w-screen md:w-[40rem] h-full bg-[#0e0e0e]  place-content-center `}
    >
      <button
        onClick={toggleModal}
        className=" absolute right-4 text-[#8a8c93] rotate-90 top-4"
      >
        <RxUpdate size={14} />
      </button>
      <section className="bg-[#212226] p-4 flex justify-center w-screen md:w-full items-center text-xl ">
        <p>Request access to see your capture on the other side.</p>
      </section>
      <section className="bg-[#1A1B1F] w-screen flex-row flex items-center gap-4 justify-center md:w-[40rem] border-t border-t-neutral-700">
        <form>
          <input
            className="lazy_input border-none rounded-md px-4 color-[#8a8c93] h-fit"
            type="text"
            placeholder="@ Join our waitlist with your email"
          />
        </form>
        <button className=" border border-neutral-700 bg-gradient-to-r hover:from-neutral-700 hover:opacity-70 hover:via-neutral-800 btn_animate hover:to-[#1A1B1F] py-1 px-6 rounded-md text-[.8rem]">
          Get Lazy
        </button>
      </section>
    </div>
  );
}
