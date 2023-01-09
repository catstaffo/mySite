import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Hero.module.css'


export default function Hero(){
    return (
        <section className="py-12">
            <div className="container mx-auto md:px-20">

                {Divider()}
            </div>
        </section>
    )
}
function Divider(){
    return(
        <div className="grid md:grid-cols-2 boxes">
            <div className="box left">
                <div>
                    <img src={"/images/statemachine.png"} alt="state machine" className="max-h-[180px] inset-0" />
                    <img src={"/images/blochsphere.png"} alt="bloch sphere" className="max-h-[320px] -mt-8 float-right"/>
                </div>
            </div>
            <div className="right-info box">
                <div className="px-5">
                    <div className="small-text">
                        <p className="font-light text-sm">my collection of <Link href="/" className="intext">tools</Link>, <Link href="/" className="intext">thoughts</Link>, and <Link href="/" className="intext">work</Link></p>
                        <div className="parallelogram float-right z-0 flex"></div>
                    </div>
                    <div className="welcome py-5">
                        <p className="welcome-text">welcome!<br></br> this site is a personal project-- feel free to explore!</p>
                        <div className="parallelogram float-right z-0 flex"></div>
                        <p className="binary-text pt-3">
                            01110111 01100101 01101100 01100011 01101111 01101101 01100101 00100001 00100000 01110100 01101000 01101001 01110011 00100000 01110011 01101001 01110100 01100101 00100000 01101001 01110011 00100000 01100001 00100000 01110000 01100101 01110010 01110011 01101111 01101110 01100001 01101100 00100000 01110000 01110010 01101111 01101010 01100101 01100011 01110100 00101101 00101101 00100000 01100110 01100101 01100101 01101100 00100000 01100110 01110010 01100101 01100101 00100000 01110100 01101111 00100000 01100101 01111000 01110000 01101100 01101111 01110010 01100101 00100001</p>
                        <div className="parallelogram float-right z-0 flex"></div>
                    </div>
                <img src={"/images/xorgate.png"} alt="xor gate" className="max-h-[60px] z-20 float-right overflow-visible"/>
            </div>
        </div>
        </div>
    )
}