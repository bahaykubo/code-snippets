package blogposts.service;

import blogposts.model.NewBlogPost;
import blogposts.model.UpdateBlogPost;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class BlogPostsClient {

    private static final String BASE_URI = "https://jsonplaceholder.typicode.com";

    public Response getAllPosts() {
        return given()
                .baseUri(BASE_URI)
                .when()
                .get("/posts");
    }

    public Response getPostsByUser(int userId) {
        return given()
                .baseUri(BASE_URI)
                .queryParam("userId", userId)
                .when()
                .get("/posts");
    }

    public Response getPost(int id) {
        return given()
                .baseUri(BASE_URI)
                .when()
                .get("/posts/{id}", id);
    }

    public Response addPost(NewBlogPost post) {
        return given()
                .baseUri(BASE_URI)
                .contentType(ContentType.JSON)
                .body(post)
                .when()
                .post("/posts");
    }

    public Response updatePost(UpdateBlogPost update) {
        return given()
                .baseUri(BASE_URI)
                .contentType(ContentType.JSON)
                .body(update)
                .when()
                .put("/posts/{id}", update.id);
    }

    public Response deletePost(int id) {
        return given()
                .baseUri(BASE_URI)
                .when()
                .delete("/posts/{id}", id);
    }
}
