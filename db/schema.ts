import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  service: varchar("service", { length: 160 }).notNull(),
  budget: varchar("budget", { length: 120 }).default("").notNull(),
  contact: varchar("contact", { length: 200 }).notNull(),
  message: text("message").default("").notNull(),
  lang: varchar("lang", { length: 4 }).default("en").notNull(),
  status: varchar("status", { length: 20 }).default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
export type LeadRow = typeof leads.$inferSelect;
