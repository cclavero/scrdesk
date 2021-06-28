package config

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
