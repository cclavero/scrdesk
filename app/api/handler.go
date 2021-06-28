package api

import (
	"net/http"

	"github.com/cclavero/scrdesk/app/service"
	"github.com/gin-gonic/gin"
)

func getAppConfig(ctx *gin.Context) {
	appConfig := configSer.GetAppConfig()
	ctx.JSON(http.StatusOK, newDataJSONObj(appConfig))
}

func getScores(ctx *gin.Context) {
	items := scoreSer.GetScores()
	ctx.JSON(http.StatusOK, newDataJSONObj(items))
}

func postUserLogin(ctx *gin.Context) {
	var userCreds service.UserCreds
	if err := ctx.BindJSON(&userCreds); err != nil {
		ctx.JSON(http.StatusBadRequest, newErrorJSONObj("Bad user credentials format"))
		return
	}
	userProfile, isValidated := userSer.ValidateUserCredentials(&userCreds)
	if !isValidated {
		ctx.JSON(http.StatusBadRequest, newErrorJSONObj("Unauthorized"))
		return
	}
	ctx.JSON(http.StatusOK, newDataJSONObj(userProfile))
}
