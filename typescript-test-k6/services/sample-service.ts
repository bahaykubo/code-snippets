import { config } from '../config/config';
import http, { RefinedResponse, ResponseType } from 'k6/http';

export class SampleService {
  getBlogPosts(): RefinedResponse<ResponseType> {
    return http.get(`${config.jsonplaceholderURL}/posts`);
  }
}
