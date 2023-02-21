import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Hero.module.css";

/* not a meaningless abstraction-- 
    you did this so you can easily add sections later if you want, since long index pages w/ tabs leading to anchors within the page are what's trendy right now, might want to place "about" section in here instead of separate page?
*/
export default function Hero() {
  return (
    <div className="py-12">
      <div className="container mx-auto home:px-20">{Section1()}</div>
    </div>
  );
}

function Section1() {
  return (
    <div className="grid md:grid-cols-2 boxes grow-0 ">
      <div className="box min-content">
        <div>
          <img src={"/images/homeimagee.png"} className="auto-cols-max"></img>
        </div>
      </div>
      <div className="box auto-cols-max grow-0">
        <div className="px-5">
          <div className="small-text">
            <p className="font-light text-sm">
              my collection of{" "}
              <Link href="/" className="intext">
                tools
              </Link>
              ,{" "}
              <Link href="/notes" className="intext">
                thoughts
              </Link>
              , and{" "}
              <Link href="/projects" className="intext">
                work
              </Link>
            </p>
            <div className="parallelogram float-right z-0 flex"></div>
          </div>
          <div className="py-5">
            <p className="">
              welcome!<br></br> this site is a personal project-- feel free to
              explore!
            </p>
            <div className="parallelogram float-right z-0 flex sm:text-sm"></div>
            <p className="pt-3">
              01110111 01100101 01101100 01100011 01101111 01101101 01100101
              00100001 00100000 01110100 01101000 01101001 01110011 00100000
              01110011 01101001 01110100 01100101 00100000 01101001 01110011
              00100000 01100001 00100000 01110000 01100101 01110010 01110011
              01101111 01101110 01100001 01101100 00100000 01110000 01110010
              01101111 01101010 01100101 01100011 01110100 00101101 00101101
              00100000 01100110 01100101 01100101 01101100 00100000 01100110
              01110010 01100101 01100101 00100000 01110100 01101111 00100000
              01100101 01111000 01110000 01101100 01101111 01110010 01100101
              00100001
            </p>
            <div className="parallelogram float-right z-0 flex"></div>
          </div>
          <img
            src={"/images/xorgate.png"}
            alt="xor gate"
            className="max-h-[60px] z-20 float-right"
          />
        </div>
      </div>
    </div>
  );
}
