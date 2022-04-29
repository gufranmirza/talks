wget http://localhost:6060/debug/pprof/trace -O trace-profile

go tool trace trace-profile
