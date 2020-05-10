import gql from 'graphql-tag'

export const CREATE_USER = gql`
    mutation createUser ($nome: String!, $email: String!, $password: String!){
        createUser(
            nome: $nome
            email: $email
            password: $password
        ){
            nome
            email
        }
    }
`; 