package blogposts;

import blogposts.model.BlogPost;
import blogposts.service.BlogPostsClient;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.HttpURLConnection;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.notNullValue;
import static org.testng.Assert.assertEquals;

public class GetBlogPostsTest {

    private static final int NON_EXISTENT_POST_ID = 999999999;
    private static final int NON_EXISTENT_USER_ID = 999999999;

    private final BlogPostsClient blogPosts = new BlogPostsClient();

    private BlogPost blogPost;

    @BeforeClass
    public void getSampleBlogPost() {
        Response response = blogPosts.getAllPosts();
        assertEquals(response.statusCode(), HttpURLConnection.HTTP_OK);
        blogPost = response.jsonPath().getList(".", BlogPost.class).get(0);
    }

    @Test
    public void shouldReturnAllBlogPosts() {
        blogPosts.getAllPosts()
                .then()
                .statusCode(HttpURLConnection.HTTP_OK)
                .body("id", everyItem(notNullValue()))
                .body("title", everyItem(notNullValue()))
                .body("body", everyItem(notNullValue()))
                .body("userId", everyItem(notNullValue()));
    }

    @Test
    public void shouldReturnBlogPostDetails() {
        blogPosts.getPost(blogPost.id)
                .then()
                .statusCode(HttpURLConnection.HTTP_OK)
                .body("id", notNullValue())
                .body("title", notNullValue())
                .body("body", notNullValue())
                .body("userId", notNullValue());
    }

    @Test
    public void shouldReturnNotFoundForInvalidPostId() {
        blogPosts.getPost(NON_EXISTENT_POST_ID)
                .then()
                .statusCode(HttpURLConnection.HTTP_NOT_FOUND);
    }

    @Test
    public void shouldReturnBlogPostsForGivenUser() {
        blogPosts.getPostsByUser(blogPost.userId)
                .then()
                .statusCode(HttpURLConnection.HTTP_OK)
                .body("userId", everyItem(equalTo(blogPost.userId)));
    }

    @Test
    public void shouldReturnEmptyListWhenUserDoesNotExist() {
        blogPosts.getPostsByUser(NON_EXISTENT_USER_ID)
                .then()
                .statusCode(HttpURLConnection.HTTP_OK)
                .body("size()", equalTo(0));
    }
}
