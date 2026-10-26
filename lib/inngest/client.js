import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "finance-platform",
  name: "Finance Platform",

  // Required for local development in v4
  isDev: process.env.NODE_ENV !== "production",
});