package blogposts;

import blogposts.model.BlogPost;
import blogposts.model.NewBlogPost;
import blogposts.model.UpdateBlogPost;
import blogposts.service.BlogPostsClient;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.HttpURLConnection;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.notNullValue;
import static org.testng.Assert.assertEquals;

public class AddUpdateBlogPostsTest {

    private static final int NON_EXISTENT_POST_ID = 999999999;

    private final BlogPostsClient blogPosts = new BlogPostsClient();

    private BlogPost blogPost;

    @BeforeClass
    public void getSampleBlogPost() {
        Response response = blogPosts.getAllPosts();
        assertEquals(response.statusCode(), HttpURLConnection.HTTP_OK);
        blogPost = response.jsonPath().getList(".", BlogPost.class).get(0);
    }

    @Test
    public void shouldAddANewBlogPost() {
        NewBlogPost newPost = new NewBlogPost("New Title", "New blog details", 1);

        blogPosts.addPost(newPost)
                .then()
                .statusCode(HttpURLConnection.HTTP_CREATED)
                .body("id", notNullValue());
    }

    @Test
    public void shouldUpdateAnExistingBlogPost() {
        UpdateBlogPost update = new UpdateBlogPost(blogPost.id, "this is the updated title", null);

        blogPosts.updatePost(update)
                .then()
                .statusCode(HttpURLConnection.HTTP_OK)
                .body("title", equalTo("this is the updated title"));
    }

    @Test
    public void shouldReturnInternalServerErrorWhenUpdatingPostThatDoesNotExist() {
        UpdateBlogPost update = new UpdateBlogPost(NON_EXISTENT_POST_ID, "this should not update", null);

        blogPosts.updatePost(update)
                .then()
                .statusCode(HttpURLConnection.HTTP_INTERNAL_ERROR);
    }
}
