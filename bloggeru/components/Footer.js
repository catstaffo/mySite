import Link from "next/link";
import { RiCopyrightLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto my-auto flex justify-end py-1">
        <div className="flex col">
          <RiCopyrightLine className="text-sky-blue"></RiCopyrightLine>
          <span className="text-[12px] text-coffee">
            Catherine Stafford. 2023.
          </span>
        </div>
      </div>
    </footer>
  );
}
