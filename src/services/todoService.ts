import { desc, eq, sql } from "drizzle-orm";
import { db } from "../db";
import { todos } from "../db/schema";

export async function createTodo(description: string) {
  const result = await db.insert(todos).values({ description }).returning();
  return result[0];
}

export async function getTodos() {
  return await db.select().from(todos).orderBy(desc(todos.createdAt));
}

export async function deleteTodo(id: number) {
  await db.delete(todos).where(eq(todos.id, id));
}

export async function getTodosCount() {
  const query = await db
    .select({
      count: sql<number>`cast(count(*) as int)`,
    })
    .from(todos);
  return query[0].count;
}
