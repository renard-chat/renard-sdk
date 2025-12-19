import type RenardSdk from "..";

export let getToken = (
  sessionToken: string | undefined | null,
  renardSdk: RenardSdk
) =>
  sessionToken ||
  renardSdk.axios.defaults.headers.common["Authorization"]
    ?.toString()
    .replace("Bearer ", "");

export let useToken = (
  sessionToken: string | undefined | null,
  renardSdk: RenardSdk
): { headers: { Authorization: string } } => {
  return {
    headers: {
      Authorization: `Bearer ${getToken(sessionToken, renardSdk)}`,
    },
  };
};
