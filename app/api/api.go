package api

import (
	"github.com/cclavero/scrdesk/app/config"
	"github.com/cclavero/scrdesk/app/service"
	"github.com/gin-gonic/gin"
)

var (
	httpPort  string
	configSer *service.ConfigSer
	userSer   *service.UserSer
	scoreSer  *service.ScoreSer
)

// Init function to init the gin engine
func Init(appConfig *config.AppConfig, ginEngine *gin.Engine) error {

	// Init services
	configSer = service.NewConfigSer(appConfig)
	userSer = service.NewUserSer()
	scoreSer = service.NewScoreSer()

	// API
	httpPort = ":" + appConfig.HttpPort
	app := ginEngine.Group("/app")
	{
		app.GET("/config", getAppConfig)
		app.POST("/login", postUserLogin)
	}
	api := ginEngine.Group("/api")
	{
		api.GET("/score", getScores)
	}

	return nil
}

// Start function to start the ginEngine
func Start(ginEngine *gin.Engine) error {
	if err := ginEngine.Run(httpPort); err != nil {
		return err
	}
	return nil
}
