import Link from "next/link";
import { FaCat } from "react-icons/fa";
import styles from '../styles/components/Nav.module.css'



export default function Nav() {
  return (
    <nav className="font-medium">
      <div className="xl:container xl:mx-auto pt-3 flex flex-col items-center border-t-8 border-sky-blue sm:flex-row sm:justify-between text-center py-3">
        <div className="w-96 order-1 flex justify-center sm:order-1">
          <FaCat className="text-honey text-xl"></FaCat><h1 className="tracking-[.025em]">&nbsp;Student <span className="text-coffee">|</span> Developer </h1>
        </div>
        <div className="shrink w-96 sm:order-2">
          <Link href = "/about" className="tracking-[.035em] text-xl hover:underline underline-offset-[2.5px] decoration-2 decoration-lilac"><span className="tracking-[.035em] font-[26px]">C</span>atherine <span className="tracking-[.035em] font-[24px]">S</span>tafford</Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex lg:pr-2 gap-[1.25rem] sm:px-2">
            <Link href ="/" className="tracking-[.025em] hover:underline underline-offset-[2.5px] decoration-2 decoration-lilac">Home</Link>
            <Link href="/notes" className="tracking-[.025em] hover:underline underline-offset-[2.5px] decoration-2 decoration-lilac">Notes</Link>
            <Link href="/projects" className="tracking-[.025em] hover:underline underline-offset-[2.5px] decoration-2 decoration-lilac">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}