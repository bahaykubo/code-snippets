package example.service.client;

import com.fasterxml.jackson.databind.ObjectMapper;
import example.service.records.BlogPost;

import java.net.http.HttpResponse;

public class BlogPostClient {

    private final ObjectMapper mapper = new ObjectMapper();
    private final HttpClient httpClient = new HttpClient();
    private final String baseUrl = "http://localhost:7000";

    public HttpResponse<String> getUserPosts(Integer userId) throws Exception {
        return httpClient.get(this.baseUrl + "/posts/" + userId);
    }

    public HttpResponse<String> getAllPosts() throws Exception {
        return httpClient.get(this.baseUrl + "/posts");
    }

    public BlogPost[] extractBlogPosts(HttpResponse<String> response) throws Exception {
        return mapper.readValue(response.body(), BlogPost[].class);
    }

}
