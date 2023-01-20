module.exports = {
  auth0Domain: process.env.AUTH0_DOMAIN || 'chfs-poc.us.auth0.com',
  path: process.env.SAML_PATH || '/callback',
  entryPoint: process.env.SAML_ENTRY_POINT || 'https://chfs-poc.us.auth0.com/samlp/8mn3CHwlPL0QzdiOzJa3O6rXgJ2aDvfc',
  issuer: 'urn:chfs-poc.us.auth0.com',
  logoutUrl: 'https://chfs-poc.us.auth0.com/samlp/8mn3CHwlPL0QzdiOzJa3O6rXgJ2aDvfc/logout',
  callbackUrl: 'http://127.0.0.1:3000/callback',
  logoutCallbackURL: 'http://127.0.0.1:3000/logout-callback',
  cert: process.env.SAML_CERT || `-----BEGIN CERTIFICATE-----
MIIDBTCCAe2gAwIBAgIJCqLPsUb+NYk6MA0GCSqGSIb3DQEBCwUAMCAxHjAcBgNV
BAMTFWNoZnMtcG9jLnVzLmF1dGgwLmNvbTAeFw0yMzAxMTkyMDI1NThaFw0zNjA5
MjcyMDI1NThaMCAxHjAcBgNVBAMTFWNoZnMtcG9jLnVzLmF1dGgwLmNvbTCCASIw
DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ6bluV2aYY0zankVwyCHHn2EM4j
Q5/VSwVUtAUMCK1ys+kwZQXfPFE2exbVVgcKIRl9qsWcR2uJIplsbhRf99ZkvsHx
AumHUoju0LO80y845Nt/AusXuBWQTqyckFsTNe/w9niA4czR4gBmzTfAhRerbaO1
30PKZieWWo0fRpfZ82w9uchGYNsR1fOMiPoVQmCgWqFu3ewXXK4o9hytsXxAq5Ns
3aTbZ4+xCfKX0YqPaJ3gB0PsLIR/h4QtssmhtXQ+FPkln6oIehBfi5oy1vxyCaWW
swkqYR9jtL5ox9j6amv3llQrleFvWo+y9jP8JhJjlrizdutB7FnWviIjjU8CAwEA
AaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUMK/F7ZHQiHqCGNJLdDt9
9HJzzLMwDgYDVR0PAQH/BAQDAgKEMA0GCSqGSIb3DQEBCwUAA4IBAQBCvfo/LQJs
hSn5IbUxAWLi0tsMtSDTc1q3opUkIRG03JNFaKnCJ4dARMtredzF4vDk68x+upoQ
rYSZmRkHzIECzwYi89v0kJno6PmN5Ht8pzTL9hVjo7x5cxeDK4ofkpj70ktqrcw/
sNx6dWv8NnEruL9X/5cU7IH+SQSmrtI7kQlLY/APPzwqWlf1RWJboApEetR4zWxW
CsxKlCWAmfzEmaM62jHkypxoRp3pBi3TcWIxiHXCbo+6Drj75mg0scX/mJseZB8z
OSgH/w2pqrSz4J3aX9w/645LA6gA5RV7L0WCrGZfPGA/DW5UCbF4DP++TIFeqx5v
CLdmIUTnB/5C
-----END CERTIFICATE-----`
};
