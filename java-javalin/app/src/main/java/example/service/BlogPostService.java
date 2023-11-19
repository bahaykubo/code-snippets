package example.service;

import example.service.records.BlogPost;

import java.util.Arrays;
import java.util.Objects;

interface BlogPostService {
    BlogPost[] getBlogPosts();
    BlogPost[] findUserBlogPosts(Integer userId);
}

class BlogPostServiceImpl implements BlogPostService {
    @Override
    public BlogPost[] getBlogPosts() {
        return new BlogPost[]{
            new BlogPost(
                1,
                1,
                "sunt aut facere repellat",
                "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit"
            ),
            new BlogPost(
                1,
                2,
                "qui est esse",
                "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque"
            ),
            new BlogPost(
                2,
                3,
                "ea molestias quasi",
                "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus"
            ),
            new BlogPost(
                2,
                4,
                "eum et est occaecati",
                "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa"
            ),
            new BlogPost(
                3,
                5,
                "dolorem eum magni",
                "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae"
            )
        };
    }

    @Override
    public BlogPost[] findUserBlogPosts(Integer userId) {
        BlogPost[] allBlogPosts = getBlogPosts();
        return Arrays.stream(allBlogPosts)
            .filter(blogPost -> Objects.equals(blogPost.userId(), userId))
            .toArray(BlogPost[]::new);
    }
}
