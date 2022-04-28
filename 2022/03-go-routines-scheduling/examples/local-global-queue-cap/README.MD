```
GODEBUG=schedtrace=1000 GOMAXPROCS=2 go run main.go

SCHED 0ms: gomaxprocs=2 idleprocs=1 threads=6 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
# command-line-arguments
SCHED 0ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=1 idlethreads=0 runqueue=0 [0 0]
# command-line-arguments
SCHED 0ms: gomaxprocs=2 idleprocs=1 threads=4 spinningthreads=0 idlethreads=1 runqueue=0 [0 0]
SCHED 0ms: gomaxprocs=2 idleprocs=0 threads=5 spinningthreads=1 idlethreads=1 runqueue=0 [0 0]
SCHED 1002ms: gomaxprocs=2 idleprocs=2 threads=9 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 1002ms: gomaxprocs=2 idleprocs=0 threads=5 spinningthreads=0 idlethreads=2 runqueue=6290 [151 79]
SCHED 2012ms: gomaxprocs=2 idleprocs=2 threads=9 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 2011ms: gomaxprocs=2 idleprocs=0 threads=5 spinningthreads=0 idlethreads=2 runqueue=6389 [101 30]
SCHED 3021ms: gomaxprocs=2 idleprocs=2 threads=9 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 3021ms: gomaxprocs=2 idleprocs=0 threads=5 spinningthreads=0 idlethreads=2 runqueue=6359 [52 109]
SCHED 4024ms: gomaxprocs=2 idleprocs=2 threads=9 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 4027ms: gomaxprocs=2 idleprocs=0 threads=5 spinningthreads=0 idlethreads=2 runqueue=6456 [4 60]
```