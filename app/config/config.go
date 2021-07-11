package config

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

// AppConfig type
type AppConfig struct {
	Version     string
	UIFilesPath string
	HttpPort    string
}

// InitAppConfig function to init the app main configuration
func InitAppConfig(version string) (*AppConfig, error) {
	appConfig := &AppConfig{
		Version:     version,
		UIFilesPath: "./ui",
		HttpPort:    "8000",
	}
	return appConfig, nil
}

// InitGinEngine function to init the gin webserver engine
func InitGinEngine(appConfig *AppConfig) (*gin.Engine, error) {
	gin.SetMode(gin.ReleaseMode)
	ginEngine := gin.Default()

	// Init webserver static resources
	ginEngine.Use(static.Serve("/", static.LocalFile(appConfig.UIFilesPath, true)))

	// Webserver Not Found error
	ginEngine.NoRoute(func(ctx *gin.Context) {
		ctx.Redirect(301, "/")
	})

	return ginEngine, nil
}
