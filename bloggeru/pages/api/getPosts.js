import { gql } from "graphql-request";


export const GET_BLOGPOSTS = gql`
    query {
        posts {
            id
            title
            datePublished
            slug
            content {
            html
            }
            author {
            name
            avatar {
                url
            }
            }
            coverPhoto {
            publishedAt
            createdBy {
                id
            }
            url
            }
        }
        }
    `;