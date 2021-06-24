package api

import (
	"net/http"

	"github.com/cclavero/scrdesk/app/config"
	"github.com/gin-gonic/gin"
)

func getConfig(ctx *gin.Context, appConfig *config.AppConfig) {
	ctx.JSON(http.StatusOK, gin.H{"config": appConfig})
}

func getScores(ctx *gin.Context) {
	items := scoreSer.GetScores()
	ctx.JSON(http.StatusOK, gin.H{"items": items})
}
