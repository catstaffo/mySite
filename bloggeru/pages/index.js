import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {GraphQLClient, gql} from 'graphql-request'
import { GET_BLOGPOSTS } from './api/query'
import BlogCard from '../components/BlogCard'
import Handler from '../template/handler'
import Hero from '../components/Hero'


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
      <Handler>
        <Hero />
        {/*<div className="container mx-auto mt-0 px-2">
          <div className="md:flex">
            <div className="flex-[3_1_0%] text-gray-700 text-center px-5 py-5 m-2 rounded">
            <div className={styles.card}>
              {posts.map((post) => (
                <BlogCard title={post.title}
                author={post.author}
                coverPhoto={post.coverPhoto}
                key={post.id}
                datePublished={post.datePublished}
                slug={post.slug}
                />
              ))}
              </div>
            </div>
          </div>
        </div>*/}
      </Handler>
    </>
  )
}
