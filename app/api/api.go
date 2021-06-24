package api

import (
	"github.com/cclavero/scrdesk/app/config"
	"github.com/cclavero/scrdesk/app/service"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

var (
	ginEngine *gin.Engine
	httpPort  string
	scoreSer  *service.ScoreSer
)

func Init(appConfig *config.AppConfig) error {
	initGinEngine(appConfig)

	// Init services
	scoreSer = service.NewScoreSer()

	// Static: Serve the frontend
	ginEngine.Use(static.Serve("/", static.LocalFile(appConfig.UIFilesPath, true)))

	// API
	httpPort = ":" + appConfig.HttpPort
	app := ginEngine.Group("/app")
	{
		app.GET("/config", func(ctx *gin.Context) { getConfig(ctx, appConfig) })
	}
	api := ginEngine.Group("/api")
	{
		api.GET("/score", getScores)
	}

	return nil
}

func Start() error {
	if err := ginEngine.Run(httpPort); err != nil {
		return err
	}
	return nil
}

func initGinEngine(appConfig *config.AppConfig) {
	gin.SetMode(gin.ReleaseMode)
	ginEngine = gin.Default()
}
