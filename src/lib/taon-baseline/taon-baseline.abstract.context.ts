//#region imports
import { TaonAnalyticsAbstractContext } from '@taon-dev/analytics/src';
import { TaonCmsAbstractContext } from '@taon-dev/cms/src';
import { TaonECommerceAbstractContext } from '@taon-dev/e-commerce/src';
import { TaonEmailsAbstractContext } from '@taon-dev/emails/src';
import { TaonMarketingAbstractContext } from '@taon-dev/marketing/src';
import { TaonSeoAbstractContext } from '@taon-dev/seo/src';
import { TaonSessionAbstractContext } from '@taon-dev/session/src';
import { createContext, TaonBaseContext } from 'taon/src';

//#endregion

export const TaonBaselineAbstractContext = createContext(() => ({
  contextName: 'TaonBaselineAbstractContext',
  abstract: true,
  contexts: {
    TaonBaseContext,
    TaonSessionAbstractContext,
    TaonEmailsAbstractContext,
    TaonCmsAbstractContext,
    TaonECommerceAbstractContext,
    TaonAnalyticsAbstractContext,
    TaonMarketingAbstractContext,
    TaonSeoAbstractContext,
  },
}));
