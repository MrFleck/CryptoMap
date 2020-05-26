import gql from 'graphql-tag'

export const LOGIN = gql`
    mutation login ($email: String!, $password: String!){
        login(
            email: $email
            password: $password
        ){
            user_id
            name
            email
            accessToken
        }
    }
`;