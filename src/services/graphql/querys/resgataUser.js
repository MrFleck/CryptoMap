import gql from 'graphql-tag'

export const RESGATA_USER = gql`
    query Users(){
        user_id
        name
        email
    }
`;