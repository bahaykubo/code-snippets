import { getFilmsWithAxios } from './axios-graphql';
import { getFilmsWithGraphQL } from './graphql-request';

(async () => {
  await getFilmsWithAxios().then((response) => {
    console.log('response from axios ->');
    console.log(response.data.allFilms?.films);
  });

  await getFilmsWithGraphQL().then((response) => {
    console.log('response from graphql-request ->');
    console.log(response.data.allFilms?.films);
  });
})();
