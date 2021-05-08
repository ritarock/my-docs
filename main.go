package main

import "fmt"

func main() {
	a := []int{1, 2, 3}
	b := []int{2, 3}

	result := func(arr1, arr2 []int) []int {
		m := make(map[int]struct{})
		for _, v := range arr2 {
			m[v] = struct{}{}
		}

		tmp := []int{}
		for _, v := range arr1 {
			if _, ok := m[v]; ok {
				continue
			}
			tmp = append(tmp, v)
		}
		return tmp
	}(a, b)

	fmt.Println(result)
}
