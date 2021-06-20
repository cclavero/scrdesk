package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

// TEMPORAL
type Score struct {
	Id    int    `json:"id"`
	Score string `json:"score"`
}

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()
	// Serve the frontend
	router.Use(static.Serve("/", static.LocalFile("./ui", true)))
	// API
	api := router.Group("/api")
	{
		api.GET("/score", func(c *gin.Context) {

			// TEMPORAL
			items := []Score{
				{Id: 1, Score: "Score 1"},
				{Id: 2, Score: "Score 2"},
				{Id: 3, Score: "Score 3"},
				{Id: 4, Score: "Score 4"},
			}
			c.JSON(http.StatusOK, gin.H{"items": items})
		})
	}
	// Start the app
	if err := router.Run(":8000"); err != nil {
		panic(err)
	}
}
