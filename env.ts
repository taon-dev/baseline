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
    superUsers: () => '',
    alwaysAdministrators: () => ``,
    googleSecret: () => ``,
    googleClientId: '',
    ACCESS_TOKEN_SECRET: () => ``,
    REFRESH_TOKEN_SECRET: () => ``,
    STRIPE_SECRET_KEY: () => ``,
    STRIPE_WEBHOOK_KEY: () => ``,
  },
  loading: {
    preAngularBootstrap: {
      background: '#fdebed',
      loader: { name: 'lds-default' },
    },
  },
};
export default env;
