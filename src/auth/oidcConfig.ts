export const oidcConfig = {
  authority: "http://127.0.0.1:8080/realms/CentralPayment.Api",
  client_id: "centralpayment-panel",
  redirect_uri: "http://localhost:5173/callback",
  post_logout_redirect_uri: "http://localhost:5173/",
  scope: "openid profile"
};
