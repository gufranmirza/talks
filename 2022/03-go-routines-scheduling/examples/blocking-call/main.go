package main

import (
	"log"
	"net/http"
	_ "net/http/pprof"
	"sync"
	"syscall"
)

var wg sync.WaitGroup

func main() {
	for i := 0; i < 100; i++ {
		wg.Add(1) // increases WaitGroup

		// calls a function as goroutine
		go func() {

			for i := 0; i < 1e6; i++ {
				_, _, _ = syscall.Syscall(syscall.SYS_GETPID, 0, 0, 0)
			}

			wg.Done()
		}()
	}

	// pprof
	go func() {
		log.Println(http.ListenAndServe("localhost:6060", nil))
	}()

	wg.Wait() // waits until WaitGroup is <= 0

}

// status: http://golang.org/src/runtime/
// Gidle,            // 0
// Grunnable,        // 1 runnable and on a run queue
// Grunning,         // 2 running
// Gsyscall,         // 3 performing a syscall
// Gwaiting,         // 4 waiting for the runtime
// Gmoribund_unused, // 5 currently unused, but hardcoded in gdb scripts
// Gdead,            // 6 goroutine is dead
// Genqueue,         // 7 only the Gscanenqueue is used
// Gcopystack,       // 8 in this state when newstack is moving the stack

// function used to generate CLI trace
// for i := 0; i < 3; i++ {
// 	wg.Add(1) // increases WaitGroup

// 	// calls a function as goroutine
// 	go func() {
// 		_, _, _ = syscall.Syscall(syscall.SYS_GETPID, 0, 0, 0)
// 		wg.Done()
// 	}()
// }
