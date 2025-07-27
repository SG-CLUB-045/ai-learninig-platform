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
  cid:varchar().notNull().unique(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 1000 }),
  noofchapter: integer().notNull(),
  includevideo: boolean().notNull().default(false),
  level: varchar({ length: 50 }).notNull(),
  imageURL: varchar({ }).default('https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/ai-guru-lab-images%2F1752250045712.png?alt=media&token=e0fd716d-bf72-4bbc-abad-bf6541eeaf96'),
  category: varchar({ length: 255 }).notNull(),
  courseJson: json(),
  courseContent: json().default({}),
  userEmail: varchar('userEmail').references(() => usersTable.email).notNull(),
});

export const  enrollCourseTable = pgTable("enrollCourse",{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid: varchar().references(() => coursesTable.cid).notNull(),
  userEmail: varchar('userEmail').references(() => usersTable.email).notNull(),
  completedChapters: json(),
})