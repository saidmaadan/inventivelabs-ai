import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  serial,
  boolean,
  decimal,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";

// ... (previous schema code remains the same)

export const subscriptions = pgTable("subscription", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  stripeCustomerId: text("stripe_customer_id").notNull(),
  stripePriceId: text("stripe_price_id").notNull(),
  stripeSubscriptionId: text("stripe_subscription_id").notNull(),
  status: text("status").notNull(),
  currentPeriodStart: timestamp("current_period_start").notNull(),
  currentPeriodEnd: timestamp("current_period_end").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const prices = pgTable("price", {
  id: serial("id").primaryKey(),
  stripeId: text("stripe_id").notNull().unique(),
  productId: text("product_id").notNull(),
  active: boolean("active").default(true),
  description: text("description"),
  unitAmount: decimal("unit_amount", { precision: 10, scale: 2 }).notNull(),
  currency: text("currency").notNull(),
  type: text("type").notNull(),
  interval: text("interval"),
  intervalCount: integer("interval_count"),
  trialPeriodDays: integer("trial_period_days"),
  metadata: text("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});