import { z } from "zod";

const createPostSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export { createPostSchema };
