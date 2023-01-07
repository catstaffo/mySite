import Image from 'next/image';
import Link from 'next/link';

export default function Hero(){
    // 01110111 01100101 01101100 01100011 01101111 01101101 01100101 00100001 00100000 01110100 01101000 01101001 01110011 00100000 01110011 01101001 01110100 01100101 00100000 01101001 01110011 00100000 01100001 00100000 01110000 01100101 01110010 01110011 01101111 01101110 01100001 01101100 00100000 01110000 01110010 01101111 01101010 01100101 01100011 01110100 00101101 00101101 00100000 01100110 01100101 01100101 01101100 00100000 01100110 01110010 01100101 01100101 00100000 01110100 01101111 00100000 01100101 01111000 01110000 01101100 01101111 01110010 01100101 00100001: welcome! this site is a personal project-- feel free to explore!
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-semibold text-2xl pb-12 text-center">Welcome~</h1>

                {Divider()}
            </div>
        </section>
    )
}
function Divider(){
    return(
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href="/"><Image src={"/images/blochsphere.png"} alt="bloch sphere" width={600} height={600} /></Link>
            </div>
            <div className="info">
                <div className="small-text">
                    <p className="font-light text-sm">my collection of <Link href="/" className="intext">tools</Link>, <Link href="/" className="intext">thoughts</Link>, and <Link href="/" className="intext">work</Link></p>
                </div>
            </div>
        </div>
    )
}