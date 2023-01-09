import Image from 'next/image'
import styles from "../styles/Home.module.css";
import {GraphQLClient, gql} from 'graphql-request'
import { GET_BLOGPOSTS } from './api/getPosts'
import BlogCard from '../components/BlogCard'
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
