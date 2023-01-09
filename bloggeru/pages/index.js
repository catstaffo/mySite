import Image from 'next/image'
import styles from "../styles/pages/Home.module.css";
import Handler from '../template/handler'
import Hero from '../components/Hero'



export default function Home() {

  return (
    <>
      <Handler>
        <Hero />
      </Handler>
    </>
  )
}
