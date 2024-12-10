import { IoIosArrowRoundForward } from "react-icons/io";

interface ButtonProps {
  text: string;
  bgColour: string;
  textColour: string;
  onClick?: () => void; // Optional onClick handler
}

export default function Button({ text, bgColour, textColour, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick} // Will only trigger if onClick is provided
      style={{ backgroundColor: bgColour, color: textColour }}
      className="flex  items-center justify-center gap-1 px-3 py-2 md:px-6 rounded-[50px] font-bold md:font-extrabold text-base md:text-lg transition-all duration-300 hover:scale-105"
    >
      {text} <IoIosArrowRoundForward className="text-xl font-bold md:text-2xl" />
    </button>
  );
}