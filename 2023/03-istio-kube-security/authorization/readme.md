kubectl create ns auth
kubectl label namespace auth istio-injection=enabled

kubectl apply -f k8s.yaml -n auth
kubectl get all -n auth

kubectl get AuthorizationPolicy --all-namespaces

kubectl exec -n auth -it pod/inventory-6dfbcfdcf4-xm9mn -- /bin/sh
curl -v -X GET users
curl -v -X GET shoes
