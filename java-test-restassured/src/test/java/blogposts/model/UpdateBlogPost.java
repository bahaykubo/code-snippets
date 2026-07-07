package blogposts.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class UpdateBlogPost {

    @JsonIgnore
    public final int id;

    public final String title;
    public final String body;

    public UpdateBlogPost(int id, String title, String body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }
}
