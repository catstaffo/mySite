import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {GraphQLClient, gql} from 'graphql-request'
const inter = Inter({ subsets: ['latin'] })
import { GET_BLOGPOSTS } from './api/query'
import BlogCard from '../components/BlogCard'
import Nav from '../components/Nav'

const graphcms = new GraphQLClient("https://api-us-west-2.hygraph.com/v2/clccjupzo3xq601uoedv66cxq/master");

export async function getStaticProps(){
  const { posts } = await graphcms.request(GET_BLOGPOSTS);
  return {
    props: {
      posts,
    },
  };
}




export default function Home({posts}) {

  return (
    <>
      <Head>
        <title>Catherine Stafford</title>
        <meta name="description" content="Personal site of Catherine Stafford" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-5 mx-auto px-2">
        <div className="md:flex">
          <div className="flex-[1_1_0%] text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded">
            <Nav />
          </div><div className="flex-[3_1_0%] text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded">
          <main className={styles.main}>
            {posts.map((post) => (
              <BlogCard title={post.title}
              author={post.author}
              coverPhoto={post.coverPhoto}
              key={post.id}
              datePublished={post.datePublished}
              slug={post.slug}
              />
            ))}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
