const CLIENT_ID = process.env.VUE_APP_CLIENT_ID
const ISSUER = process.env.VUE_APP_ISSUER
const REDIRECTURL = process.env.VUE_APP_REDIRECTURL
export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECTURL,
    scopes: ['openid', 'profile', 'email']
  }
}

