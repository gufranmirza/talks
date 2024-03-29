kubectl create ns ingress
kubectl label namespace ingress istio-injection=enabled

kubectl get all -n ingress

kubectl create secret tls nginx-server-certs \
 --key example_certs/nginx.example.com.key \
 --cert example_certs/nginx.example.com.crt -n ingress

kubectl create configmap nginx-configmap --from-file=nginx.conf=./nginx.conf -n ingress

GET INGRESS HOST/PORT

```
export INGRESS_NAME=istio-ingressgateway
export INGRESS_NS=istio-system
kubectl get svc "$INGRESS_NAME" -n "$INGRESS_NS"
export INGRESS_HOST=$(kubectl -n "$INGRESS_NS" get service "$INGRESS_NAME" -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
export INGRESS_PORT=$(kubectl -n "$INGRESS_NS" get service "$INGRESS_NAME" -o jsonpath='{.spec.ports[?(@.name=="http2")].port}')
export SECURE_INGRESS_PORT=$(kubectl -n "$INGRESS_NS" get service "$INGRESS_NAME" -o jsonpath='{.spec.ports[?(@.name=="https")].port}')
export TCP_INGRESS_PORT=$(kubectl -n "$INGRESS_NS" get service "$INGRESS_NAME" -o jsonpath='{.spec.ports[?(@.name=="tcp")].port}')

```

curl -v --resolve "nginx.example.com:443:45.79.245.47" --cacert example_certs/example.com.crt "https://nginx.example.com:443"
