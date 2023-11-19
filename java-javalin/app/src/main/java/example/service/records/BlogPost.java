package example.service.records;

public record BlogPost(
    Integer userId,
    Integer id,
    String title,
    String body
) {
}
