package config

// TEMPORAL

// AppConfig type
type AppConfig struct {
	Version     string `json:"version"`
	UIFilesPath string `json:"-"`
	HttpPort    string `json:"-"`
}

func InitAppConfig(version string) (*AppConfig, error) {

	// TEMPORAL
	appConfig := &AppConfig{
		Version:     version,
		UIFilesPath: "./ui",
		HttpPort:    "8000",
	}
	return appConfig, nil

}
