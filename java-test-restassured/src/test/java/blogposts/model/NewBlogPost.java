package blogposts.model;

public class NewBlogPost {
    public final String title;
    public final String body;
    public final int userId;

    public NewBlogPost(String title, String body, int userId) {
        this.title = title;
        this.body = body;
        this.userId = userId;
    }
}
