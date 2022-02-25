package main

import (
	"fmt"
	"sync"
)

func main() {
	elements := []string{"a", "b", "c"}

	var wg sync.WaitGroup

	wg.Add(len(elements) + 1)

	for _, item := range elements {
		wg.Add(len(elements))

		go func(wg *sync.WaitGroup, item string) {
			defer wg.Done()

			fmt.Println(item)

		}(&wg, item)

		// wg.Wait()
	}

	wg.Wait()
}
