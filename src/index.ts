import axios from "axios";
import users from "./users/users";

/** Settings to run the API with. */
export interface ApiSettings {
  url?: string;
  publicToken: string;
  privateToken: string;
}

/** The main class of the SDK to contact the API. */
export class RenardSdk {
  /** Main API route of the SDK. */
  public api;
  public axios;

  constructor(apiSettings: ApiSettings) {
    this.axios = axios.create({
      baseURL: apiSettings.url ?? "http://localhost:3000/api/v1-beta/",
      headers: {
        "X-Public-Token": apiSettings.publicToken,
        "X-Private-Token": apiSettings.privateToken,
      },
    });

    this.api = {
      /** User endpoints and auth. */
      users: users(this),
    };
  }

  /** Sets the session token of the user. */
  setSessionToken(sessionToken: string) {
    this.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${sessionToken}`;
  }
}

// const sdk = new RenardSdk({
//   publicToken: "xxXVerySeriousTokenXxx",
//   privateToken: "xxXVerySeriousTokenXxx",
// });
// const session = await sdk.api.users.auth.register({
//   email: "liam.cheneval@gmail.com",
//   password: "ThisPasswordIsGay",
//   username: "LolouTheFox",
// });
// sdk.setSessionToken(session.sessionToken);
// const userId = await sdk.api.users.getSelf().id;
// sdk.api.chats.create(["<user_id>", userId]);
