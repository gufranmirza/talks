kubectl create ns foo
kubectl label namespace foo istio-injection=enabled

kubectl create ns bar

kubectl apply -f httpbin.yaml -n foo
kubectl apply -f sleep.yaml -n bar

kubectl get all -n foo
kubectl get all -n bar

kubectl get peerauthentication --all-namespaces

kubectl exec -n bar -it sleep-7656cf8794-w6gq8 -- /bin/sh

curl -v httpbin.foo.svc.cluster.local:8000

kubectl port-forward svc/kiali 20001:20001 -n istio-system

kubectl delete ns foo
kubectl delete ns bar
