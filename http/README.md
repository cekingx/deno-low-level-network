# Interact With HTTP

Use telnet or curl

curl
```bash
curl -X POST -H "content-type: application/json" --data '{"key": "value"}' localhost:8000
{"message":"Hello World"}
```

telnet
```bash
telnet localhost 8000
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
POST / HTTP/1.1
content-type: application/json
content-length: 15

{"key":"value"}
HTTP/1.1 200 OK
content-type: application/json; charset=UTF-8
vary: Accept-Encoding
content-length: 25
date: Thu, 17 Oct 2024 07:12:59 GMT

{"message":"Hello World"}
```