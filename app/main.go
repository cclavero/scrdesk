package main

import (
	"fmt"

	"github.com/cclavero/scrdesk/app/api"
	"github.com/cclavero/scrdesk/app/config"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

// Global vars
var (
	Version = ""
)

// Main entry point
func main() {
	var appConfig *config.AppConfig
	var ginEngine *gin.Engine
	var err error

	// TODO: panic + log

	// Init app config and webserver
	if appConfig, err = config.InitAppConfig(Version); err != nil {
		panic(err)
	}
	if ginEngine, err = config.InitGinEngine(appConfig); err != nil {
		panic(err)
	}

	// Log
	fmt.Printf("\n\nScrdesk app: ver. %s\n\n", appConfig.Version)

	// Init webserver static resources
	ginEngine.Use(static.Serve("/", static.LocalFile(appConfig.UIFilesPath, true)))

	// Init API
	if err = api.Init(appConfig, ginEngine); err != nil {
		panic(err)
	}

	// Start webserver
	if err = api.Start(ginEngine); err != nil {
		panic(err)
	}
}
