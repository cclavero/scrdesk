package api

import (
	"net/http"

	"github.com/cclavero/scrdesk/app/config"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

// TEMPORAL

type Score struct {
	Id    int    `json:"id"`
	Score string `json:"score"`
}

func InitRoutes(appConfig *config.AppConfig) (*gin.Engine, error) {

	// TEMPORAL
	gin.SetMode(gin.ReleaseMode)
	// Set the router as the default one shipped with Gin
	router := gin.Default()
	// Serve the frontend
	router.Use(static.Serve("/", static.LocalFile("./ui", true)))

	// API

	// TEMPORAL
	app := router.Group("/app")
	{
		app.GET("/config", func(ctx *gin.Context) { apiGetConfig(ctx, appConfig) })
	}

	// TEMPORAL
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

	// TEMPORAL
	return router, nil
}

func apiGetConfig(ctx *gin.Context, appConfig *config.AppConfig) {
	ctx.JSON(http.StatusOK, gin.H{"config": appConfig})
}
