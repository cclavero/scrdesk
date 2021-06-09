package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

type Response struct {
	Message string `json:"message"`
}

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()
	// Serve the frontend
	router.Use(static.Serve("/", static.LocalFile("../build/dist", true)))
	// API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}
	// Start the app
	router.Run(":3000")
}
