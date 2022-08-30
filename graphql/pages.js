import { gql } from '@apollo/client'


export const getSoupsQuery = () => {
    return gql`
        query {
            soupesCollection(limit: 0) {
                items {
                    title
                    imageLink
                    slug
                 
        }}}
    `
}