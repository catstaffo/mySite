import Link from "next/link";
import { FaCat } from "react-icons/fa";


function Nav() {
  return (
    <nav className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center border-t-8 border-cambridge-blue sm:flex-row sm:justify-between text-center py-3">
        <div className="w-96 order-1 flex justify-center sm:order-1">
          <FaCat className="text-superior-blue text-xl"></FaCat><h1 className="tracking-[.015em]">&nbsp;Student <span className="text-superior-blue">|</span> Developer </h1>
        </div>
        <div className="shrink w-96 sm:order-2">
          <Link href = "/about" className="tracking-wide text-xl hover:underline underline-offset-[2.5px] decoration-2 decoration-cambridge-blue"><span className="tracking-wide font-[26px]">C</span>atherine <span className="tracking-wide font-[24px]">S</span>tafford</Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-7">
            <Link href ="/" className="tracking-[.015em] hover:underline underline-offset-[2.5px] decoration-2 decoration-cambridge-blue">Home</Link>
            <Link href="/notes" className="tracking-[.015em] hover:underline underline-offset-[2.5px] decoration-2 decoration-cambridge-blue">Notes</Link>
            <Link href="/projects" className="tracking-[.015em] hover:underline underline-offset-[2.5px] decoration-2 decoration-cambridge-blue">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;