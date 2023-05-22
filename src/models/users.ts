import { sql } from "drizzle-orm";
import { index, integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
  "users",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    username: text("username").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    avatar: text("avatar"),
    url: text("url"),
    createdAt: text("created_at").default(sql`CURRENT_TIME`),
    updatedAt: text("updated_at").default(sql`CURRENT_TIME`),
  },
  (users) => ({
    email: index("email_idx").on(users.email),
  })
);
