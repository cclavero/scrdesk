package main

import (
	"fmt"

	"github.com/cclavero/scrdesk/app/api"
	"github.com/cclavero/scrdesk/app/config"
	"github.com/gin-gonic/gin"
)

// Global constants
const (
	HttpPort = "8000"
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

	if appConfig, err = config.NewAppConfig(Version); err != nil {
		panic(err)
	}

	// TEMPORAL:LOG
	fmt.Printf("\n\nScrdesk app: ver. %s\n\n", appConfig.Version)

	if ginEngine, err = api.InitRoutes(appConfig); err != nil {
		panic(err)
	}

	// Start the app
	if err = ginEngine.Run(":" + HttpPort); err != nil {
		panic(err)
	}
}
