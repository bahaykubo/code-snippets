package example.service;

import example.service.client.BlogPostClient;
import example.service.records.BlogPost;
import org.junit.jupiter.api.Test;

import java.net.http.HttpResponse;
import java.util.Arrays;
import java.util.List;

import static com.google.common.truth.Truth.assertThat;


class AppTest {
    BlogPostClient blogPostClient = new BlogPostClient();

    @Test
    public void should_return_blog_posts() throws Exception {
        HttpResponse<String> response = blogPostClient.getAllPosts();

        assertThat(response.statusCode()).isEqualTo(200);

        BlogPost[] blogPosts = blogPostClient.extractBlogPosts(response);

        assertThat(blogPosts.length).isGreaterThan(1);
        for (BlogPost blogPost : blogPosts) {
            System.out.println(blogPost.title());
        }
    }

    @Test
    public void should_return_blog_posts_for_user_id() throws Exception {
        HttpResponse<String> response = blogPostClient.getUserPosts(1);

        assertThat(response.statusCode()).isEqualTo(200);

        BlogPost[] blogPosts = blogPostClient.extractBlogPosts(response);
        assertThat(blogPosts).hasLength(2);

        List<Integer> userIds = Arrays.stream(blogPosts).map(BlogPost::userId).toList();
        assertThat(userIds).containsExactlyElementsIn(Arrays.asList(1, 1));
    }

    @Test
    public void should_return_no_blog_posts_if_user_id_does_not_exist() throws Exception {
        HttpResponse<String> response = blogPostClient.getUserPosts(42);

        assertThat(response.statusCode()).isEqualTo(200);

        BlogPost[] blogPosts = blogPostClient.extractBlogPosts(response);
        assertThat(blogPosts).isEmpty();
    }
}
