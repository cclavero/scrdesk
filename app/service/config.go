package service

import "github.com/cclavero/scrdesk/app/config"

// AppConfig type
type AppConfig struct {
	Version string `json:"version"`
}

// Config service struct
type ConfigSer struct {
	appConfig *config.AppConfig
}

// NewConfigSer function to get a new Config service instance
func NewConfigSer(appConfigIn *config.AppConfig) *ConfigSer {
	return &ConfigSer{
		appConfig: appConfigIn,
	}
}

// GetAppConfig method to get the main app configuration
func (configSer *ConfigSer) GetAppConfig() AppConfig {
	return AppConfig{
		Version: configSer.appConfig.Version,
	}
}
