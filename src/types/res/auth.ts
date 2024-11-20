import { IRes } from ".";

type IResLoginData = { email: string; token: string };

type IResLogin = IRes<IResLoginData>;

export type { IResLogin };
