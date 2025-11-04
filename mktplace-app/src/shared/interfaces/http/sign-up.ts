import { UserInterface } from "../user";

export interface SignUpHttpParams {
  name: string;
  email: string;
  avatarUrl?: string;
  phone: string;
  password: string;
}

export interface SignUpHttpResponse {
  user: UserInterface;
  token: string;
  refreshToken: string;
}
