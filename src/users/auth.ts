import type RenardSdk from "..";
import { getToken, useToken } from "../utils/requests";

interface LoginParams {
  email: string;
  password: string;
}

interface RegisterParams {
  email: string;
  password: string;
  username: string;
}

interface CheckSessionParams {
  sessionToken?: string;
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
    checkSession: async ({
      sessionToken,
    }: CheckSessionParams): Promise<boolean> => {
      try {
        const result = await renardSdk.axios.get(
          "/users/auth/check-session",
          useToken(sessionToken, renardSdk)
        );
        return result.status === 200;
      } catch (e) {
        return false;
      }
    },
  };
};
