import { GraphQLClient } from 'graphql-request'
import { GET_BLOGPOSTS } from './api/getPosts'
import BlogCard from '../components/BlogCard'
import styles from "../styles/pages/notes.module.css";
import Handler from '../template/handler'; 

export const GRAPHCMS = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS);


export async function getStaticProps() {
  const { posts } = await GRAPHCMS.request(GET_BLOGPOSTS);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default function Notes({posts}) {
    return (
        <Handler>
        <div className="container mx-auto mt-0 px-2">
          <div className="md:flex">
            <div className="flex-[3_1_0%] text-gray-800 text-center px-5 py-5 m-2 rounded">
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
        </div>
        </Handler>
    )
}