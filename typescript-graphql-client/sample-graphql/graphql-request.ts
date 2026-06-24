import { gql, rawRequest } from 'graphql-request';
import { graphqlURL } from './config';

type GraphQLClientResponse<T> = Awaited<ReturnType<typeof rawRequest<T>>>;

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
