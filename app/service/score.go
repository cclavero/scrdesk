package service

type Score struct {
	Id    int    `json:"id"`
	Score string `json:"score"`
}

type ScoreSer struct {
}

func NewScoreSer() *ScoreSer {
	return &ScoreSer{}
}

func (scoresSer *ScoreSer) GetScores() []Score {

	// TEMPORAL:MOCK
	items := []Score{
		{Id: 1, Score: "Score 1"},
		{Id: 2, Score: "Score 2"},
		{Id: 3, Score: "Score 3"},
		{Id: 4, Score: "Score 4"},
	}
	return items

}
