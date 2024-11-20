import { axiosInst } from "@/config";
import { IReqCreatePost } from "@/types/req";

const POST = {
  GET: () => axiosInst.post("/posts"),
  CREATE: (payload: IReqCreatePost) => axiosInst.post("/post", payload),
};

export { POST };
