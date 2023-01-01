import Link from 'next/link'

export default function BlogPost({title, author, coverPhoto, datePublished, slug}) {
    return(
        <div className="card">
            <Link href={'/posts/' + slug}>
                <div className="imgcontainer">
                    <img src={coverPhoto.url} />
                </div>
            </Link>
            <div className="text">
                <h2>{title}</h2>
            </div>
            <div className="details">
                <div className="author">
                    <img src={author.avatar.url} />
                    <h3>{author.name}</h3>
                </div>
                <div className="date">
                    <h3>{datePublished}</h3>
                </div>
            </div>

        </div>
    )
}