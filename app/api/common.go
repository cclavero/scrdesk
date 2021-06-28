package api

import "github.com/gin-gonic/gin"

const (
	DataTag  = "data"
	ErrorTag = "error"
)

func newDataJSONObj(data interface{}) interface{} {
	return gin.H{DataTag: data}
}

func newErrorJSONObj(message string) interface{} {
	return gin.H{ErrorTag: message}
}
