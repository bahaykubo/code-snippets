package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type Message struct {
	Username string `json:"username"`
	Subject  string `json:"subject"`
	Message  string `json:"message"`
}

func init() {
	error := godotenv.Load()

	if error != nil {
		log.Fatal("Error loading .env file")
	}
}

func messages() []Message {
	messages := []Message{
		{
			Username: "bingo",
			Subject:  "hello",
			Message:  "hello, i am bingo",
		},
	}
	return messages
}

func ping(context *gin.Context) {
	context.JSON(200, messages())
}

func main() {
	router := gin.Default()

	router.GET("/ping", ping)

	router.Run(":14000")
}
