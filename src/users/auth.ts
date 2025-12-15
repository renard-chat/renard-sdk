import type { RenardSdk } from "..";

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
      const result = await renardSdk.axios({
        method: "POST",
        data: {
          email,
          password,
        },
      });
      const data = result.data.json;
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
      const result = await renardSdk.axios({
        method: "POST",
        data: { email, password, username },
      });
      const data = result.data.json;
      return {
        sessionToken: data.sessionToken,
      };
    },
  };
};
