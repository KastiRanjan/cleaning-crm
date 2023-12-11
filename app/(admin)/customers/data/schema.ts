import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const customerSchema = z.object({
  id: z.string(),
  name: z.string(),
  apNo: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
  type: z.string(),
  buildingNo: z.string(),
});

export type Customer = z.infer<typeof customerSchema>;
