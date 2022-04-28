```
GODEBUG=schedtrace=100 GOMAXPROCS=2 go run main.go

SCHED 0ms: gomaxprocs=2 idleprocs=0 threads=5 spinningthreads=1 idlethreads=0 runqueue=0 [0 0]
# command-line-arguments
SCHED 0ms: gomaxprocs=2 idleprocs=1 threads=4 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 108ms: gomaxprocs=2 idleprocs=2 threads=8 spinningthreads=0 idlethreads=3 runqueue=0 [0 0]
# command-line-arguments
SCHED 0ms: gomaxprocs=2 idleprocs=0 threads=5 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 0ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=0 [97 1]
SCHED 213ms: gomaxprocs=2 idleprocs=2 threads=9 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 106ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=4 [92 2]
SCHED 315ms: gomaxprocs=2 idleprocs=1 threads=9 spinningthreads=0 idlethreads=1 runqueue=0 [0 0]
SCHED 207ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=8 [87 3]
SCHED 416ms: gomaxprocs=2 idleprocs=2 threads=9 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 308ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=10 [81 7]
SCHED 517ms: gomaxprocs=2 idleprocs=2 threads=9 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 409ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=19 [77 2]
SCHED 618ms: gomaxprocs=2 idleprocs=2 threads=9 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 510ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=16 [72 10]
SCHED 719ms: gomaxprocs=2 idleprocs=2 threads=9 spinningthreads=0 idlethreads=2 runqueue=0 [0 0]
SCHED 611ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=27 [67 4]
```