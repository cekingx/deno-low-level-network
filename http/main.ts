import { Hono, type Context } from 'hono'

const app = new Hono();

app.get('/', (c: Context) => {
  return c.text('Hello World');
});

app.post('/', async (c: Context) => {
  console.log(c.req)
  console.log('body', await c.req.json())

  return c.json({ message: 'Hello World' });
})

Deno.serve(app.fetch)