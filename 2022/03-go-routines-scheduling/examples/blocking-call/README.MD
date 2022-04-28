```
GOMAXPROCS=2 GODEBUG=schedtrace=3,scheddetail=1 go run main.go

SCHED 0ms: gomaxprocs=2 idleprocs=0 threads=5 spinningthreads=1 idlethreads=0 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=0 syscalltick=0 m=4 runqsize=2 gfreecnt=0 timerslen=0
  P1: status=1 schedtick=2 syscalltick=0 m=3 runqsize=0 gfreecnt=0 timerslen=0
  M4: p=0 curg=-1 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  M3: p=1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=true blocked=false lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=1
  G1: status=1(chan receive) m=-1 lockedm=0
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
SCHED 3ms: gomaxprocs=2 idleprocs=1 threads=6 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=1 syscalltick=16 m=0 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=3 syscalltick=0 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=0 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=1
  G1: status=2(chan receive) m=0 lockedm=0
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
SCHED 6ms: gomaxprocs=2 idleprocs=1 threads=6 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=2 schedtick=1 syscalltick=37 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=3 syscalltick=0 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=3(chan receive) m=0 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
SCHED 9ms: gomaxprocs=2 idleprocs=1 threads=6 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=2 schedtick=1 syscalltick=448 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=3 syscalltick=0 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=2(chan receive) m=0 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
SCHED 14ms: gomaxprocs=2 idleprocs=1 threads=6 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=2 syscalltick=1185 m=0 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=3 syscalltick=0 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=0 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=2(chan receive) m=0 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
SCHED 19ms: gomaxprocs=2 idleprocs=1 threads=6 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=2 syscalltick=1708 m=0 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=3 syscalltick=0 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=0 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=2(chan receive) m=0 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
SCHED 30ms: gomaxprocs=2 idleprocs=0 threads=6 spinningthreads=0 idlethreads=1 runqueue=1 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=2 schedtick=7 syscalltick=3201 m=-1 runqsize=2 gfreecnt=0 timerslen=0
  P1: status=1 schedtick=374 syscalltick=17 m=0 runqsize=1 gfreecnt=0 timerslen=0
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=10 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=1 curg=8 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=1(GC scavenge wait) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=1() m=-1 lockedm=-1
  G8: status=2() m=0 lockedm=-1
  G9: status=1() m=-1 lockedm=-1
  G10: status=3() m=4 lockedm=-1
  G11: status=1() m=-1 lockedm=-1
  G12: status=1() m=-1 lockedm=-1
SCHED 41ms: gomaxprocs=2 idleprocs=1 threads=6 spinningthreads=0 idlethreads=1 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=8 syscalltick=3219 m=4 runqsize=0 gfreecnt=1 timerslen=0
  P1: status=0 schedtick=379 syscalltick=87 m=-1 runqsize=0 gfreecnt=3 timerslen=1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=0 curg=9 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(semacquire) m=-1 lockedm=-1
  G8: status=4(semacquire) m=-1 lockedm=-1
  G9: status=2() m=4 lockedm=-1
  G10: status=4(semacquire) m=-1 lockedm=-1
  G11: status=6() m=-1 lockedm=-1
  G12: status=6() m=-1 lockedm=-1
  G19: status=6() m=-1 lockedm=-1
  G20: status=6() m=-1 lockedm=-1
SCHED 52ms: gomaxprocs=2 idleprocs=0 threads=6 spinningthreads=0 idlethreads=1 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=2 schedtick=13 syscalltick=3344 m=-1 runqsize=1 gfreecnt=1 timerslen=1
  P1: status=2 schedtick=382 syscalltick=105 m=-1 runqsize=1 gfreecnt=0 timerslen=0
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=8 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=10 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=3(semacquire) m=3 lockedm=-1
  G9: status=4(select) m=-1 lockedm=-1
  G10: status=3(semacquire) m=0 lockedm=-1
  G34: status=1() m=-1 lockedm=-1
  G35: status=1() m=-1 lockedm=-1
  G23: status=1() m=-1 lockedm=-1
  G24: status=1() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
SCHED 63ms: gomaxprocs=2 idleprocs=1 threads=6 spinningthreads=0 idlethreads=1 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=330 syscalltick=3376 m=-1 runqsize=0 gfreecnt=5 timerslen=1
  P1: status=1 schedtick=387 syscalltick=554 m=3 runqsize=0 gfreecnt=0 timerslen=0
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M3: p=1 curg=9 mallocing=1 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=2(semacquire) m=3 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
# command-line-arguments
SCHED 0ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=1 idlethreads=0 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=0 syscalltick=0 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=1 schedtick=3 syscalltick=0 m=2 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  M2: p=1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=true blocked=false lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=1
  G1: status=1(chan receive) m=-1 lockedm=0
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
SCHED 5ms: gomaxprocs=2 idleprocs=1 threads=4 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=1 syscalltick=11 m=0 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=4 syscalltick=0 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=0 curg=1 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=2(chan receive) m=0 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
SCHED 11ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=0 gcwaiting=1 nmidlelocked=0 stopwait=1 sysmonwait=0
  P0: status=0 schedtick=1 syscalltick=30 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=3 schedtick=5 syscalltick=3 m=0 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=1 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  G1: status=2(chan receive) m=0 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G7: status=4(GC worker (idle)) m=-1 lockedm=-1
  G17: status=4(GC worker (idle)) m=-1 lockedm=-1
SCHED 16ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=4 syscalltick=30 m=2 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=1 schedtick=5 syscalltick=5 m=0 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=0 curg=7 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=1 curg=1 mallocing=1 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=2(GC assist marking) m=0 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G7: status=4(GC worker (idle)) m=2 lockedm=-1
  G17: status=4(GC worker (idle)) m=-1 lockedm=-1
SCHED 75ms: gomaxprocs=2 idleprocs=0 threads=7 spinningthreads=0 idlethreads=1 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=352 syscalltick=3513 m=-1 runqsize=0 gfreecnt=7 timerslen=1
  P1: status=2 schedtick=656 syscalltick=872 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M6: p=-1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=3(select) m=6 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
SCHED 86ms: gomaxprocs=2 idleprocs=0 threads=7 spinningthreads=1 idlethreads=0 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=366 syscalltick=3756 m=-1 runqsize=0 gfreecnt=7 timerslen=0
  P1: status=1 schedtick=656 syscalltick=901 m=3 runqsize=0 gfreecnt=0 timerslen=0
  M6: p=-1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M3: p=1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=true blocked=false lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=1(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=3(select) m=6 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
  G27: status=4(IO wait) m=-1 lockedm=-1
SCHED 89ms: gomaxprocs=2 idleprocs=2 threads=7 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=372 syscalltick=3924 m=-1 runqsize=0 gfreecnt=7 timerslen=1
  P1: status=0 schedtick=658 syscalltick=901 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M6: p=-1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=3(select) m=6 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
  G27: status=4(IO wait) m=-1 lockedm=-1
SCHED 92ms: gomaxprocs=2 idleprocs=2 threads=7 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=374 syscalltick=3924 m=-1 runqsize=0 gfreecnt=7 timerslen=1
  P1: status=0 schedtick=660 syscalltick=901 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M6: p=-1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=3(select) m=6 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
  G27: status=4(IO wait) m=-1 lockedm=-1
SCHED 95ms: gomaxprocs=2 idleprocs=2 threads=7 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=376 syscalltick=3926 m=-1 runqsize=0 gfreecnt=7 timerslen=0
  P1: status=0 schedtick=661 syscalltick=901 m=-1 runqsize=0 gfreecnt=0 timerslen=1
  M6: p=-1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=3(select) m=6 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
  G27: status=4(IO wait) m=-1 lockedm=-1
SCHED 99ms: gomaxprocs=2 idleprocs=0 threads=8 spinningthreads=0 idlethreads=1 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=380 syscalltick=3926 m=-1 runqsize=0 gfreecnt=7 timerslen=1
  P1: status=0 schedtick=663 syscalltick=903 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M7: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M6: p=-1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=0 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=1(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=3(select) m=6 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
  G27: status=4(IO wait) m=-1 lockedm=-1
SCHED 103ms: gomaxprocs=2 idleprocs=2 threads=8 spinningthreads=0 idlethreads=3 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=382 syscalltick=3926 m=-1 runqsize=0 gfreecnt=7 timerslen=1
  P1: status=0 schedtick=666 syscalltick=905 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M7: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M6: p=-1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=3(select) m=6 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
  G27: status=4(IO wait) m=-1 lockedm=-1
SCHED 109ms: gomaxprocs=2 idleprocs=1 threads=8 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=384 syscalltick=3926 m=-1 runqsize=0 gfreecnt=7 timerslen=0
  P1: status=0 schedtick=669 syscalltick=905 m=-1 runqsize=0 gfreecnt=0 timerslen=1
  M7: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M6: p=-1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=3(select) m=6 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
  G27: status=4(IO wait) m=-1 lockedm=-1
SCHED 122ms: gomaxprocs=2 idleprocs=1 threads=8 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=388 syscalltick=3928 m=-1 runqsize=0 gfreecnt=7 timerslen=0
  P1: status=1 schedtick=670 syscalltick=905 m=7 runqsize=0 gfreecnt=0 timerslen=0
  M7: p=1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=true blocked=false lockedg=-1
  M6: p=-1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=1(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=3(select) m=6 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
  G27: status=4(IO wait) m=-1 lockedm=-1
SCHED 133ms: gomaxprocs=2 idleprocs=1 threads=8 spinningthreads=0 idlethreads=3 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=393 syscalltick=4202 m=-1 runqsize=0 gfreecnt=7 timerslen=1
  P1: status=1 schedtick=676 syscalltick=936 m=3 runqsize=0 gfreecnt=1 timerslen=0
  M7: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M6: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M5: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M4: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M3: p=1 curg=9 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=17 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=17
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  G1: status=4(semacquire) m=-1 lockedm=-1
  G17: status=6() m=1 lockedm=1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(sleep) m=-1 lockedm=-1
  G5: status=4(finalizer wait) m=-1 lockedm=-1
  G6: status=4(GC worker (idle)) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G7: status=4(select) m=-1 lockedm=-1
  G8: status=4(select) m=-1 lockedm=-1
  G9: status=2(chan receive) m=3 lockedm=-1
  G10: status=4(select) m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G23: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G16: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G26: status=6() m=-1 lockedm=-1
  G27: status=6() m=-1 lockedm=-1
# command-line-arguments
SCHED 0ms: gomaxprocs=2 idleprocs=1 threads=4 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=0 syscalltick=0 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=1 schedtick=5 syscalltick=0 m=0 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=1 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=1
  G1: status=2(chan receive) m=0 lockedm=0
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
SCHED 3ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=2 schedtick=3 syscalltick=52 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=1 schedtick=7 syscalltick=17 m=0 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=1 curg=19 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=3(preempted) m=2 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G17: status=4(finalizer wait) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G19: status=4(GC worker (idle)) m=0 lockedm=-1
SCHED 6ms: gomaxprocs=2 idleprocs=1 threads=4 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=8 syscalltick=160 m=2 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=13 syscalltick=17 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=0 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  G1: status=2(preempted) m=2 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G17: status=4(finalizer wait) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G19: status=4(GC worker (idle)) m=-1 lockedm=-1
SCHED 9ms: gomaxprocs=2 idleprocs=1 threads=4 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=8 syscalltick=532 m=2 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=13 syscalltick=17 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=0 curg=1 mallocing=1 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  G1: status=2(preempted) m=2 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G17: status=4(finalizer wait) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G19: status=4(GC worker (idle)) m=-1 lockedm=-1
SCHED 14ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=10 syscalltick=584 m=2 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=1 schedtick=18 syscalltick=17 m=0 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=0 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=1 curg=19 mallocing=0 throwing=0 preemptoff= locks=1 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=2(preempted) m=2 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G17: status=4(finalizer wait) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G19: status=4(GC worker (idle)) m=0 lockedm=-1
SCHED 17ms: gomaxprocs=2 idleprocs=0 threads=4 spinningthreads=0 idlethreads=1 runqueue=1 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=12 syscalltick=584 m=2 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=102 syscalltick=17 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=0 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  G1: status=2(preempted) m=2 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=1(GC scavenge wait) m=-1 lockedm=-1
  G17: status=4(finalizer wait) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G19: status=4(GC worker (idle)) m=-1 lockedm=-1
SCHED 22ms: gomaxprocs=2 idleprocs=1 threads=4 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=12 syscalltick=584 m=2 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=103 syscalltick=17 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=0 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  G1: status=2(preempted) m=2 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G17: status=4(finalizer wait) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G19: status=4(GC worker (idle)) m=-1 lockedm=-1
SCHED 33ms: gomaxprocs=2 idleprocs=1 threads=4 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=1 schedtick=13 syscalltick=584 m=2 runqsize=0 gfreecnt=0 timerslen=0
  P1: status=0 schedtick=103 syscalltick=17 m=-1 runqsize=0 gfreecnt=0 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=0 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  G1: status=2(preempted) m=2 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G17: status=4(finalizer wait) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G19: status=4(GC worker (idle)) m=-1 lockedm=-1
SCHED 43ms: gomaxprocs=2 idleprocs=1 threads=4 spinningthreads=0 idlethreads=2 runqueue=0 gcwaiting=0 nmidlelocked=0 stopwait=0 sysmonwait=0
  P0: status=0 schedtick=39 syscalltick=584 m=-1 runqsize=0 gfreecnt=25 timerslen=0
  P1: status=1 schedtick=119 syscalltick=20 m=0 runqsize=0 gfreecnt=13 timerslen=0
  M3: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M2: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=true lockedg=-1
  M1: p=-1 curg=-1 mallocing=0 throwing=0 preemptoff= locks=2 dying=0 spinning=false blocked=false lockedg=-1
  M0: p=1 curg=1 mallocing=0 throwing=0 preemptoff= locks=0 dying=0 spinning=false blocked=false lockedg=-1
  G1: status=2(semacquire) m=0 lockedm=-1
  G2: status=4(force gc (idle)) m=-1 lockedm=-1
  G3: status=4(GC sweep wait) m=-1 lockedm=-1
  G4: status=4(GC scavenge wait) m=-1 lockedm=-1
  G17: status=4(finalizer wait) m=-1 lockedm=-1
  G18: status=4(GC worker (idle)) m=-1 lockedm=-1
  G19: status=4(GC worker (idle)) m=-1 lockedm=-1
  G5: status=6() m=-1 lockedm=-1
  G6: status=6() m=-1 lockedm=-1
  G7: status=6() m=-1 lockedm=-1
  G8: status=6() m=-1 lockedm=-1
  G9: status=6() m=-1 lockedm=-1
  G10: status=6() m=-1 lockedm=-1
  G11: status=6() m=-1 lockedm=-1
  G60: status=6() m=-1 lockedm=-1
  G20: status=6() m=-1 lockedm=-1
  G25: status=6() m=-1 lockedm=-1
  G62: status=6() m=-1 lockedm=-1
  G61: status=6() m=-1 lockedm=-1
  G33: status=6() m=-1 lockedm=-1
  G34: status=6() m=-1 lockedm=-1
  G35: status=6() m=-1 lockedm=-1
  G36: status=6() m=-1 lockedm=-1
  G37: status=6() m=-1 lockedm=-1
  G38: status=6() m=-1 lockedm=-1
  G39: status=6() m=-1 lockedm=-1
  G24: status=6() m=-1 lockedm=-1
  G41: status=6() m=-1 lockedm=-1
  G42: status=6() m=-1 lockedm=-1
  G43: status=6() m=-1 lockedm=-1
  G44: status=6() m=-1 lockedm=-1
  G45: status=6() m=-1 lockedm=-1
  G46: status=6() m=-1 lockedm=-1
  G47: status=6() m=-1 lockedm=-1
  G48: status=6() m=-1 lockedm=-1
  G49: status=6() m=-1 lockedm=-1
  G50: status=6() m=-1 lockedm=-1
  G51: status=6() m=-1 lockedm=-1
  G52: status=6() m=-1 lockedm=-1
  G53: status=6() m=-1 lockedm=-1
  G54: status=6() m=-1 lockedm=-1
  G55: status=6() m=-1 lockedm=-1
  G56: status=6() m=-1 lockedm=-1
  G57: status=6() m=-1 lockedm=-1
  G58: status=6() m=-1 lockedm=-1
```