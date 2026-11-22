import type { EnvOptions } from 'tnp/src';

const env: Partial<EnvOptions> = {
  website: {
    domain: 'baseline.example.domain.com',
    title: 'Baseline',
    useDomain: true,
  },
  config: {
    microsoftClientIdForLogin: '',
    turnstileSiteKey: '',
    superUsers: () => 'darekf77@gmail.com',
    alwaysAdministrators: () => `darekf77@gmail.com'`,
    googleSecret: () => ``,
    googleClientId: '',
    ACCESS_TOKEN_SECRET: () =>
      'access-secret-c7892dda7a2c5ac1234234ecac9eb2c80f0c85cb18dc39f02f490b82ec0f0',
    REFRESH_TOKEN_SECRET: () =>
      'refresh-secret-39d306f8646ertertertertert641b2f8579a0b3fe28fc5922c5a4d',
    STRIPE_SECRET_KEY: () => '',
    STRIPE_WEBHOOK_KEY: () => '',
  },
  loading: {
    preAngularBootstrap: {
      background: '#fdebed',
      loader: { name: 'lds-default' },
    },
  },
};
export default env;
