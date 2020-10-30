import { gql } from 'apollo-angular';

const getPersonajes = gql`
query($skip:Boolean!){
    characters{
      id
      name
      actor @skip(if: $skip)
      description @skip(if: $skip)
      total_episodes @skip(if: $skip)
      photo @skip(if: $skip)
      url @skip(if: $skip)
      votes
    }
}
`;

export {
  getPersonajes,
};
