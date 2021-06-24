package main

import (
	"fmt"

	"github.com/cclavero/scrdesk/app/api"
	"github.com/cclavero/scrdesk/app/config"
)

// Global vars
var (
	Version = ""
)

// Main entry point
func main() {
	var appConfig *config.AppConfig
	var err error

	if appConfig, err = config.InitAppConfig(Version); err != nil {
		panic(err)
	}

	// TEMPORAL:LOG
	fmt.Printf("\n\nScrdesk app: ver. %s\n\n", appConfig.Version)

	if err = api.Init(appConfig); err != nil {
		panic(err)
	}

	if err = api.Start(); err != nil {
		panic(err)
	}
}
