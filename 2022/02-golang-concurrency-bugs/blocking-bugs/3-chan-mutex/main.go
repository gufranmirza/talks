package main

import (
	"fmt"
	"sync"
)

type plugin struct {
	mutex     sync.RWMutex
	workcount int
	exit      chan struct{}
}

func (p *plugin) done() {
	<-p.exit
}

func (p *plugin) work() {
	for i := 1; i <= 10; i++ {
		p.mutex.Lock()
		p.workcount += 1
		p.mutex.Unlock()

		fmt.Println("work.workcount: ", p.workcount)
	}
	p.exit <- struct{}{}
}

func (p *plugin) investigate() {
	for {
		p.mutex.RLock()
		fmt.Println("investigate.workcount: ", p.workcount)
		p.mutex.RUnlock()
	}
}

func main() {
	p := plugin{
		exit: make(chan struct{}),
	}

	go p.work()

	go p.investigate()

	// wait for exit
	p.done()
}
