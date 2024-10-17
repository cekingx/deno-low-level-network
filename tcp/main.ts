const connection = Deno.listen({ port: 8000 });
const decoder = new TextDecoder();
const encoder = new TextEncoder();

for await (const conn of connection) {
  const buff = new Uint8Array(1024);
  await conn.read(buff);
  const decoded = decoder.decode(buff);
  console.log('Server received', buff);
  console.log('Server received decoded', decoded)
  const res = encoder.encode('pong\n')
  await conn.write(res);
  conn.close();
}