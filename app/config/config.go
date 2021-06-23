package config

// TEMPORAL

// AppConfig type
type AppConfig struct {
	Version string `json:"version"`
}

func NewAppConfig(version string) (*AppConfig, error) {

	// TEMPORAL
	appConfig := &AppConfig{
		Version: version,
	}
	return appConfig, nil

}
