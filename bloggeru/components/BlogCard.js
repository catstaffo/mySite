import Link from 'next/link'
import styles from '../styles/BlogCard.module.css'

export default function BlogPost({title, author, coverPhoto, datePublished, slug}) {
    return(
        <div className={styles.card}>
            <Link href={'/notes/' + slug}>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto.url} />
                </div>
            </Link>
            <div className={styles.text}>
                <h2>{title}</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.author}>
                    <img src={author.avatar.url} />
                    <h3>{author.name}</h3>
                </div>
                <div className={styles.date}>
                    <h3>{datePublished}</h3>
                </div>
            </div>

        </div>
    )
}