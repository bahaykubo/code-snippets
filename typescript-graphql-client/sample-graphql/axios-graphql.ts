import axios, { AxiosResponse } from 'axios';
import { graphqlURL } from './config';

export const getFilmsWithAxios = async (): Promise<AxiosResponse<any>> => {
  return await axios
    .get(graphqlURL, {
      params: {
        query: `query Query {
          allFilms {
            films {
              title
              releaseDate
            }
          }
        }`,
      },
    })
    .then((response) => response.data);
};
