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
    superUsers: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:TAW9ujNF1M9fkWSqHxHpew==:7eP+GjM3yPt54BvB:UX3194fhqGxxUn7kKzdBOrV8pnEVi8PqewFlLTB/mAeA/g==$$$TAON_ENCRYPTED_END$$$`,
    alwaysAdministrators: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:cKzT0TlIKqfVAaR/loXyGg==:1lNDb2y9/QWlRPUU:bu7FT7xH37Ih4BS2d3kzaM4Ur48CBF3iMDI9qgYXdYeD3M8=$$$TAON_ENCRYPTED_END$$$`,
    googleSecret: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:MObjaaoWw5HWxpgU1MKYaA==:ie7u4tmsIvThItlI:dqqmkGKEzqcvpHp4Jvb8jA==$$$TAON_ENCRYPTED_END$$$`,
    googleClientId: '',
    ACCESS_TOKEN_SECRET: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:rV8ofrDYmaYM/UTPi5tO2A==:oI0apYCxIxKgJIGy:woL28rhUzwYl+tm6nrBnzi9CFWGZBeqzje2Ty/Ruv2miL5r5/d3HRPlKCXEZ17mgvv0qKcTjDct7cDRhluTuTp8h5P0Wg2r6ifuvcF2ILbwjP5ptZq63q2spoA==$$$TAON_ENCRYPTED_END$$$`,
    REFRESH_TOKEN_SECRET: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:99w/kZD08EgmslFXFq5+8Q==:vsizSz6MOCOhmi7W:1TftT+N9O3sNeyCctMNeRyS3JeAv4noHhRQZSlugMdSNS/enaoyG6xsjcYkne88MjTeGZun28tJ5nLv4x8MG1kbU+JRXxX4iQ0Iv9dubA25J020PaoQ=$$$TAON_ENCRYPTED_END$$$`,
    STRIPE_SECRET_KEY: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:3epfXJDbKOidUfYx1snlgg==:gYKCW/m+kRqj+ey8:SDtmkn33fLdXSu+Lko3CSw==$$$TAON_ENCRYPTED_END$$$`,
    STRIPE_WEBHOOK_KEY: () => `$$$TAON_ENCRYPTED_START$$$v1:600000:Uzn8yxJ5bu4Y7Ijl3Ejv7w==:U0wTsjOlmgJJ5xc4:efdErhywkSBevR9Ct/J9Ig==$$$TAON_ENCRYPTED_END$$$`,
  },
  loading: {
    preAngularBootstrap: {
      background: '#fdebed',
      loader: { name: 'lds-default' },
    },
  },
};
export default env;
