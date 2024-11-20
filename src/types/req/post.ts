import { createPostSchema } from "@/schema";
import { z } from "zod";

type IReqCreatePost = z.infer<typeof createPostSchema>;

export type { IReqCreatePost };
