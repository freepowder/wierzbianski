

export type AuthContextType = {
  signIn?: (credentials: LoginCredentials) => Promise<void>;
  signOut?: () => void;
  auth?: Auth;
  token?: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type User = {
  _id: number;
  email: string;
  roles: string[];

};

export type Auth = {
  user: User;
  token: string;
};


