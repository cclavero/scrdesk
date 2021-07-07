package service

// Score type
type Score struct {
	Id    int    `json:"id"`
	Score string `json:"score"`
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
	items := []Score{
		{Id: 1, Score: "Score 1"},
		{Id: 2, Score: "Score 2"},
		{Id: 3, Score: "Score 3"},
		{Id: 4, Score: "Score 4"},
	}
	return items

}
