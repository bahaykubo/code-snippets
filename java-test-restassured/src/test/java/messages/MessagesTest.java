package messages;

import org.testng.annotations.Test;

public class MessagesTest {

    @Test
    public void shouldGetMessages() {
        // GET http://localhost:5250/messages

//        {
//            "data":
//                [
//                    {
//                        "userId": "2JnVOUJgxLFDxqbP",
//                        "username": "jim",
//                        "subject": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                        "message": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//                        "_id": "IL8sXur7s0Y3tXOc"
//                    },
//                    {
//                        "userId": "2JnVOUJgxLFDxqbP",
//                        "username": "jim",
//                        "subject": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//                        "message": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//                        "_id": "neKJDODohCclgfuK"
//                    },
//                    {
//                        "userId": "2JnVOUJgxLFDxqbP",
//                        "username": "jim",
//                        "subject": "qui est esse",
//                        "message": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//                        "_id": "rvkBUGnKMRIvonNT"
//                    }
//                ]
//        }
    }

    @Test
    public void shouldGetUserMessages() {
        // GET http://localhost:5250/messages/jim

//        {
//            "data":
//                [
//                    {
//                        "userId": "2JnVOUJgxLFDxqbP",
//                        "username": "jim",
//                        "subject": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                        "message": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//                        "_id": "IL8sXur7s0Y3tXOc"
//                    },
//                    {
//                        "userId": "2JnVOUJgxLFDxqbP",
//                        "username": "jim",
//                        "subject": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//                        "message": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//                        "_id": "neKJDODohCclgfuK"
//                    },
//                    {
//                        "userId": "2JnVOUJgxLFDxqbP",
//                        "username": "jim",
//                        "subject": "qui est esse",
//                        "message": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//                        "_id": "rvkBUGnKMRIvonNT"
//                    }
//                ]
//        }
    }

    @Test
    public void shouldGetUserWithNoMessages() {
        // GET http://localhost:5250/messages/bob

//        {
//            "data": []
//        }
    }

    @Test
    public void shouldReturnNotFoundErrorOnUserThatDoesNotExist() {
        // GET http://localhost:5250/messages/bingo

        // Error 404
//        {
//            "Errors": [
//                "No blog posts by bingo"
//            ]
//        }

    }

    @Test
    public void shouldAddNewUserMessage() {
        // POST http://localhost:5250/messages
        // BODY
//        {
//            username: 'jim',
//            subject:'message subject',
//            message:'message',
//        }

        // Response Created 201
    }
}
