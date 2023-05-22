import { Hono } from "hono";
import { poweredBy } from "hono/powered-by";

const app = new Hono();

app.use("*", poweredBy());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/posts/:id", (c) => {
  console.log("params", c.req.param("id"));
  return c.json({ post: { id: c.req.param("id"), title: "Hello Hono!" } });
});

app.get("/posts", (c) => {
  return c.json({ posts: [{ title: "Hello Hono!" }] });
});

export default app;
