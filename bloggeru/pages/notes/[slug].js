import Image from 'next/image';
import styles from "../../styles/pages/Slug.module.css";
import Handler from '../../template/handler';
import { GET_BLOGPOST } from "../api/getPost";
import { SLUG_URL } from "../api/getSlug";
import { GRAPHCMS } from "../notes"

export async function getStaticPaths() {
  const { posts } = await GRAPHCMS.request(SLUG_URL);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await GRAPHCMS.request(GET_BLOGPOST, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default function BlogPost({post}){
    return(
      <Handler>
        <main className={styles.blog}>
            <img src={post.coverPhoto.url} className={styles.cover} />
            <div className={styles.title}>
                <img src={post.author.avatar.url} />
                <div className={styles.authtext}>
                    <h6>By {post.author.name}</h6>
                    <h6 className={styles.date}>{post.datePublished}</h6>
                </div>
            </div>
            <h2>{post.title}</h2>
            <div className={styles.content} dangerouslySetInnerHTML={{__html: post.content.html }}></div>
        </main>
      </Handler>
    )
}