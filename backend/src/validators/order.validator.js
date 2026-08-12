import { z } from "zod";

export const createOrderSchema = z.object({
  customerName: z.string().min(3, "Customer name is required"),
  customerPhone: z.string().min(10, "Valid phone number required"),
  customerAddress: z.string().min(5, "Address is required"),
  productCode: z.string().min(1, "Product code is required"),
  productName: z.string().min(2, "Product name is required"),
  quantity: z.number().min(1),
  amount: z.number().min(0),
  orderDate: z.string(),
});
