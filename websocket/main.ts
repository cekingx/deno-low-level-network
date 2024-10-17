import { join } from "@std/path";

Deno.serve(
  async (request: any) => {
    console.log('request header', request.headers)
    if (request.headers.get("upgrade") == "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);

      socket.onopen = () => {
        console.log("socket opened");
      }

      socket.onmessage = (event) => {
        console.log("socket message:", event.data);
        socket.send("pong");
      }

      socket.onclose = () => {
        console.log("socket closed");
      }

      socket.onerror = (error) => {
        console.log("socket error:", error);
      }

      return response;
    } else {
      const path = join(Deno.cwd(), 'websocket', 'index.html');
      const file = await Deno.open(path, { read: true });
      return new Response(file.readable);
    }
  }
)