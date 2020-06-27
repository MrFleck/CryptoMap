import gql from 'graphql-tag'

export const CREATE_USER = gql`
    mutation createUser ($nome: String!, $email: String!, $password: String!){
        createUser(
            name: $nome
            email: $email
            password: $password
        ){
            name
            email
            accessToken
        }
    }
`; 