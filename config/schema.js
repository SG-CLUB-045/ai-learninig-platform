import { boolean, integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
//   subscriptionId: varchar({ length: 255 }).notNull(),
  subscriptionId: varchar(),
});


export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid:varchar().notNull(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 1000 }),
  noofchapter: integer().notNull(),
  includevideo: boolean().notNull().default(false),
  level: varchar({ length: 50 }).notNull(),
  imageURL: varchar({ }).default(''),
  category: varchar({ length: 255 }).notNull(),
  courseJson: json(),
  userEmail: varchar('userEmail').references(() => usersTable.email).notNull(),
});