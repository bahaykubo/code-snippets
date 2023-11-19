package example.service;

import io.javalin.Javalin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App {
    public static void main(String[] args) {
        Logger logger = LoggerFactory.getLogger(App.class);
        BlogPostService blogPostService = new BlogPostServiceImpl();

        Javalin app = Javalin.create().start(7000);
        app.get("/posts", ctx -> {
            logger.info("Fetching all blog posts");
            ctx.json(blogPostService.getBlogPosts());
        });
        app.get("/posts/{userId}", ctx -> {
            Integer userId = ctx.pathParamAsClass("userId", Integer.class).get();
            logger.info("Fetching blog posts from user id " + userId);
            ctx.json(blogPostService.findUserBlogPosts(userId));
        });
    }
}

