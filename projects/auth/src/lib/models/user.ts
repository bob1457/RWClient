export interface User {
  username?: string;
  password?: string;
  rememberMe?: boolean;
  token?: string;
  avatarUrl?: string;
  firstname?: string;
  lastname?: string;
  telephone?: string;
  email?: string;
  socialmedia?: string;
  joindate?: Date;
  lastlogin?: Date;
  role?: string;
}
