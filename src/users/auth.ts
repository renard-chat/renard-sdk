import type RenardSdk from "..";

interface LoginParams {
  email: string;
  password: string;
}

interface RegisterParams {
  email: string;
  password: string;
  username: string;
}

interface AuthResponse {
  sessionToken: string;
}

export default (renardSdk: RenardSdk) => {
  return {
    /** Login a user and gives a session back. */
    login: async ({ email, password }: LoginParams): Promise<AuthResponse> => {
      const result = await renardSdk.axios.post("/users/auth/login", {
        email,
        password,
      });
      const data = result.data;
      return {
        sessionToken: data.sessionToken,
      };
    },
    /** Registers a user and gives a session back. */
    register: async ({
      email,
      password,
      username,
    }: RegisterParams): Promise<AuthResponse> => {
      const result = await renardSdk.axios.post("/users/auth/register", {
        email,
        password,
        username,
      });
      const data = result.data;
      return {
        sessionToken: data.sessionToken,
      };
    },
  };
};
