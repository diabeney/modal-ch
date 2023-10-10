import { BiSpaceBar } from "react-icons/bi";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { FaTasks, FaList } from "react-icons/fa";
import { GrOrderedList } from "react-icons/gr";
import { RiDoubleQuotesR } from "react-icons/ri";
import { GoTerminal } from "react-icons/go";
import { HiOutlineInbox } from "react-icons/hi";
import { PiTextTLight } from "react-icons/pi";

export const DropDownData = [
  {
    id: 1,
    name: "Make connection",
    icon: <BiSpaceBar />,
  },
  {
    id: 2,
    name: "Text",
    icon: <PiTextTLight />,
  },
  {
    id: 3,
    name: "Heading 1",
    icon: <LuHeading1 />,
  },
  {
    id: 4,
    name: "Heading 2",
    icon: <LuHeading2 />,
  },
  {
    id: 5,
    name: "Heading 3",
    icon: <LuHeading3 />,
  },
  {
    id: 6,
    name: "Task",
    icon: <FaTasks />,
  },
  {
    id: 7,
    name: "Bulleted List",
    icon: <FaList />,
  },
  {
    id: 8,
    name: "Numbered List",
    icon: <GrOrderedList />,
  },
  {
    id: 9,
    name: "Quote",
    icon: <RiDoubleQuotesR />,
  },
  {
    id: 10,
    name: "Code",
    icon: <GoTerminal />,
  },
  {
    id: 11,
    name: "Divider",
    icon: <HiOutlineInbox />,
  },
];
