package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Post struct {
	Id       int       `json:"id"`
	Content  string    `json:"content"`
	Author   Author    `json:"author"`
	Comments []Comment `json:"comments"`
}
type Author struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}
type Comment struct {
	Id      int    `json:"id"`
	Content string `json:"content"`
	Author  string `json:"author"`
}

func main() {
	post := Post{
		Id:      1,
		Content: "Hello",
		Author: Author{
			Id:   1,
			Name: "author1",
		},
		Comments: []Comment{
			{
				Id:      1,
				Content: "comment1",
				Author:  "author2",
			},
			{
				Id:      2,
				Content: "comment2",
				Author:  "author3",
			},
		},
	}
	jsonFile, err := os.Create("created.json")
	if err != nil {
		fmt.Println(err)
		return
	}
	encoder := json.NewEncoder(jsonFile)
	err = encoder.Encode(&post)
	if err != nil {
		fmt.Println(err)
		return
	}
}
