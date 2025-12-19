import type RenardSdk from "..";
import accounts from "./accounts";
import auth from "./auth";

export default (renardSdk: RenardSdk) => {
  return {
    /** Authentification to Renard */
    auth: auth(renardSdk),
    accounts: accounts(renardSdk),
  };
};
