import { Hono } from "hono";
import { poweredBy } from "hono/powered-by";
import { drizzle } from "drizzle-orm/d1";
import { InferModel } from "drizzle-orm";
import { users } from "./models/users";

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

app.get("/users", async (c) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(users).all();
  return c.json(result);
});

app.post("/users/add", async (c) => {
  const db = drizzle(c.env.DB);
  type NewUser = InferModel<typeof users, "insert">;
  const user = await c.req.json<NewUser>();
  const result = await db.insert(users).values(user).run();
  return c.json(result);
});

export default app;
