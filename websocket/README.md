# Interact With Websocket

Use telnet to upgrade http connection

```bash
telnet localhost 8000
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
GET / HTTP/1.1
connection: upgrade
upgrade: websocket
sec-websocket-key: some-key

HTTP/1.1 101 Switching Protocols
upgrade: websocket
connection: Upgrade
sec-websocket-accept: 8iILEZtcVdtFD7MDlPKip9ec9nw=
date: Thu, 17 Oct 2024 07:32:50 GMT

���No response from ping frame.

```