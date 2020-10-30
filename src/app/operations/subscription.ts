import { gql } from 'apollo-angular';

const changeVotes = gql`
subscription{
    changeVotes{
        id
        name
        votes
    }
}
`;

export { changeVotes }
