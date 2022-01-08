
curl -v productpage.foo.svc.cluster.local:9080

oc get PeerAuthentication/default -n istio-system  -o yaml


### SSL Setup

openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -subj '/O=IBM/CN=*.appdomain.cloud' -keyout ingress.key -out ingress.crt
openssl req -out appdomain.cloud.csr -newkey rsa:2048 -nodes -keyout appdomain.cloud.key -subj "/CN=*.appdomain.cloud/O=ingress organization"
openssl x509 -req -days 365 -CA ingress.crt -CAkey ingress.key -set_serial 0 -in appdomain.cloud.csr -out appdomain.cloud.crt
oc create -n istio-system secret tls ingress-ingress-tls --key=appdomain.cloud.key --cert=appdomain.cloud.crt