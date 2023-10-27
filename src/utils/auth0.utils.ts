import { WebAuth, AuthOptions } from "auth0-js";

const domain = "dev-qpyxn3hwex8y8psi.us.auth0.com";
const clientID = "GJUdY6pPmNiA6wguiSVppcfFeGKIWQYf";

const options: AuthOptions = { domain, clientID };

export const auth = new WebAuth(options);
