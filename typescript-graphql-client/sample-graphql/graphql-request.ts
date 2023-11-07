import { gql, rawRequest } from 'graphql-request';
import { graphqlURL } from './config';
import { GraphQLClientResponse } from 'graphql-request/build/esm/types';

export const getFilmsWithGraphQL = async (): Promise<GraphQLClientResponse<any>> => {
  const query = gql`
    query Query {
      allFilms {
        films {
          title
          releaseDate
        }
      }
    }
  `;

  return await rawRequest(graphqlURL, query);
};
