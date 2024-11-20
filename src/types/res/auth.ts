import { IRes } from ".";

type IResLoginData = { email: string; token: string };

type IResLogin = IRes<IResLoginData>;
type IResSignup = IRes<null>;

export type { IResLogin, IResSignup };
