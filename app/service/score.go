package service

import "fmt"

// Score type
type Score struct {
	Id     int    `json:"id"`
	Score  string `json:"score"`
	Desc   string `json:"desc"`
	ImgSrc string `json:"imgSrc"`
}

// Score service struct
type ScoreSer struct {
}

// NewScoreSer function to get a new Score service instance
func NewScoreSer() *ScoreSer {
	return &ScoreSer{}
}

// GetScores method to get all the scores
func (scoresSer *ScoreSer) GetScores() []Score {

	// TODO:MOCK
	items := []Score{}
	for i := 1; i < 20; i++ {
		score := Score{
			Id:     i,
			Score:  fmt.Sprintf("Score %d", i),
			Desc:   fmt.Sprintf("Description %d", i),
			ImgSrc: fmt.Sprintf("https://mdbootstrap.com/img/Photos/Others/images/%d.jpg", i),
		}
		items = append(items, score)
	}

	return items
}
