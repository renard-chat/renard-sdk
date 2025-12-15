import type { ApiSettings, RenardSdk } from "..";
import auth from "./auth";

export default (reardSdk: RenardSdk) => {
  return {
    /** Authentification to Renard */
    auth: auth(reardSdk),
  };
};
