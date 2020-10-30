import { gql } from "apollo-angular";

const addVote = gql`
mutation ($id:ID!){
  addVote(character: $id) {
    status
    msg
  }
}
`;

export { addVote }
