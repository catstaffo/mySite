import Image from "next/image";
import styles from "../styles/pages/Home.module.css";
import Handler from "../template/handler";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Handler>
        <Hero />
      </Handler>
      <Footer />
    </div>
  );
}
