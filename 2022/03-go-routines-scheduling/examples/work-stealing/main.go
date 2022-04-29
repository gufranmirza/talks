package main

import (
	"hash/crc32"
	"log"
	"math/rand"
	"net/http"
	_ "net/http/pprof"

	"sync"
)

func main() {
	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {

			for i := 0; i < 1e6; i++ {
				_ = cpuIntensiveTask(10000000 + rand.Intn(10000))
			}

			wg.Done()
		}()
	}

	// pprof
	go func() {
		log.Println(http.ListenAndServe("localhost:6060", nil))
	}()

	wg.Wait()
}

var glCrc32bs = make([]byte, 1024*256)

func cpuIntensiveTask(amt int) uint32 {
	var ck uint32
	for range make([]struct{}, amt) {
		ck = crc32.ChecksumIEEE(glCrc32bs)
	}
	return ck
}
