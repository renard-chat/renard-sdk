import type RenardSdk from "..";
import { useToken } from "../utils/requests";

interface MeParams {
  sessionToken?: string;
}

export default (renardSdk: RenardSdk) => {
  return {
    me: async ({ sessionToken }: MeParams) => {
      try {
        const result = await renardSdk.axios.get(
          "/users/me",
          useToken(sessionToken, renardSdk)
        );
        return result.data;
      } catch {
        return false;
      }
    },
  };
};
