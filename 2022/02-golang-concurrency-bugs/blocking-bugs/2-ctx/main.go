package main

import (
	"context"
	"fmt"
)

func main() {
	elements := []string{"a", "b", "c"}

	fn := func(cancel context.CancelFunc) {
		go func() {
			defer func() {
				if r := recover(); r != nil {
					fmt.Println("Recovered in f", r)
				}
				// cancel()
			}()

			for i, item := range elements {
				fmt.Println(item)

				// call done
				if i == len(elements)-1 {
					// fmt.Println(elements[100]) // panic
					cancel()
				}
			}
		}()
	}

	ctx, cancel := context.WithCancel(context.Background())

	fn(cancel)

	<-ctx.Done()
}
