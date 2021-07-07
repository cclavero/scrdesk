package service

// UserCreds type
type UserCreds struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// UserProfile struct
type UserProfile struct {
	Name  string `json:"name"`
	Token string `json:"token"`
}

// User service struct
type UserSer struct {
}

// NewUserSer function to get a new User service instance
func NewUserSer() *UserSer {
	return &UserSer{}
}

// ValidateUserCredentials method to validate get the main app configuration
func (userSer *UserSer) ValidateUserCredentials(userCreds *UserCreds) (*UserProfile, bool) {

	// TODO:MOCK
	if userCreds.Username == "admin" && userCreds.Password == "admin" {
		return &UserProfile{
			Name:  "Carles Clavero i Matas",
			Token: "11111111111111111111-token",
		}, true
	}

	return &UserProfile{}, false
}
