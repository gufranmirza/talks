kubectl create default mtls
kubectl label namespace default istio-injection=enabled

kubectl apply -f k8s.yaml -n mtls
kubectl get all -n default

kubectl get AuthorizationPolicy

kubectl exec -n default -it inventory-999859cb8-h5vfm -- /bin/sh
curl -v -X GET users
curl -v -X GET shoes
