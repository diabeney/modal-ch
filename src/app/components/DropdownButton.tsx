"use client";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className=" text-sm p-1 border border-neutral-700 rounded-md w-fit aspect-square grid place-items-center ">
      {children}
    </div>
  );
}
