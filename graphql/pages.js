import { gql } from '@apollo/client'


export const getSoupsQuery = () => {
    return gql`
        query {
            soupsCollection(limit: 0) {
                items {
                    title
                    imageLink
                    slug
                 
        }}}
    `
}