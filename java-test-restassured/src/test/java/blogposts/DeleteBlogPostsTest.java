package blogposts;

import blogposts.model.BlogPost;
import blogposts.service.BlogPostsClient;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.HttpURLConnection;

import static org.testng.Assert.assertEquals;

public class DeleteBlogPostsTest {

    private final BlogPostsClient blogPosts = new BlogPostsClient();

    private BlogPost blogPost;

    @BeforeClass
    public void getSampleBlogPost() {
        Response response = blogPosts.getAllPosts();
        assertEquals(response.statusCode(), HttpURLConnection.HTTP_OK);
        blogPost = response.jsonPath().getList(".", BlogPost.class).get(0);
    }

    @Test
    public void shouldRemoveAnExistingBlogPost() {
        blogPosts.deletePost(blogPost.id)
                .then()
                .statusCode(HttpURLConnection.HTTP_OK);
    }
}
