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
	configSer *service.ConfigSer
	userSer   *service.UserSer
	scoreSer  *service.ScoreSer
)

// Init function to init the gingo engine
func Init(appConfig *config.AppConfig) error {
	initGinEngine(appConfig)

	// Init services
	configSer = service.NewConfigSer(appConfig)
	userSer = service.NewUserSer()
	scoreSer = service.NewScoreSer()

	// Static: Serve the frontend
	ginEngine.Use(static.Serve("/", static.LocalFile(appConfig.UIFilesPath, true)))

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

// Start function to start the webserver
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
