import type { EnvOptions } from 'tnp/src';

/**
 * Use taon env:decode
 *
 * and default master password: taon
 *
 */

const env: Partial<EnvOptions> = {
  website: {
    domain: 'baseline.example.domain.com',
    title: 'Baseline',
    useDomain: true,
  },
  config: {
    microsoftClientIdForLogin: '',
    turnstileSiteKey: '',
    superUsers: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:TR79AlZh5k15Lso7zNNYYQ==:wC/TMSe8ZyN28Upx:8F5D+6CQRpAUF7EFWV4+vmKNkFhbtwHCrFVJtWt1dhp3Mw==$$$TAON_ENCRYPTED_END$$$`,
    alwaysAdministrators: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:5TinqbAJsfnQs7g3CLwJ3Q==:UcbQISQxRteu/12m:ckUeZGNHmAhjdlH/Mw80n8yQN3+A6vZSTl6VnUGddosmJw==$$$TAON_ENCRYPTED_END$$$`,
    googleSecret: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:4moTiSx8jUAeRLb7dKOEAA==:jKZe0R0zvOebJkxA:3zKL5YYsExV2fiQ40pxd3A==$$$TAON_ENCRYPTED_END$$$`,
    googleClientId: '',
    ACCESS_TOKEN_SECRET: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:HgX9eG+o513lkXe0u5Mmhg==:uUnKbqvlvEzxKnB1:8KpXJSuRPoS/3UnrY9rOuJxDACbjj/dwwAxnTMBCcBAoHPmmaAbvKNy1WekSssDwNhYeVji4sx8RDbckXwXek8wLRb/KWlJpuIpyLgRLoRqCiNM=$$$TAON_ENCRYPTED_END$$$`,
    REFRESH_TOKEN_SECRET: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:DX8N1KlEi81sKFL4bGkRRQ==:ncVraiRjYkDmCsYM:r8N3NChvKxaol9e9d6viNJA+CSQwvf4vRMPQaT7ZdiFdfL2i24aOof2uReVczOx8UB1rlcflnS+/iU+n1V3dAUa1LhSYOHERFxNaYcA27hIq8AVr//A=$$$TAON_ENCRYPTED_END$$$`,
    STRIPE_SECRET_KEY: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:FzmseWDkxt7yRuA/K4/FjQ==:BwG6YpDJ+L5m6wRp:NP0Yv/Mh+jbwJekzxBaOew==$$$TAON_ENCRYPTED_END$$$`,
    STRIPE_WEBHOOK_KEY: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:FQ6H+njbnTOWJsxG1swyIA==:QlLya9W0RO64oOMv:c8J08mGyiGXfOhBQ7W9LGw==$$$TAON_ENCRYPTED_END$$$`,
  },
  loading: {
    preAngularBootstrap: {
      background: '#fdebed',
      loader: { name: 'lds-default' },
    },
  },
};
export default env;