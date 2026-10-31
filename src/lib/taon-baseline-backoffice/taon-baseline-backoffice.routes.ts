//#region imports
import { Routes } from '@angular/router';
import { Translation } from '@taon-dev/i18n/src';
import { TaonAuthContextEntity } from '@taon-dev/session/src';
import { adminLazyRoute as adminLazyRouteBase } from '@taon-dev/ui/src';
import { Taon } from 'taon/src';
//#endregion

const t = Translation.for(Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP);

const adminLazyRoute = adminLazyRouteBase<TaonAuthContextEntity>;

export const TaonBaselineBackofficeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./taon-baseline-backoffice.component').then(
        m => m.TaonBaselineBackofficeComponent,
      ),

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome',
      },
      adminLazyRoute({
        path: 'welcome',
        menuItem: t.signal.gettext('Welcome'),
        color: 'green',
        icon: 'waving_hand',
        expandable: false,
        loader: () =>
          import('@taon-dev/ui/src').then(m => m.TaonAdminWelcomeRoutes),
      }),
      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.isLocalhostBackend,
        path: 'sudo',
        menuItem: 'Sudo',
        color: 'red',
        icon: 'supervisor_account',
        expandable: true,
        loader: () =>
          import('@taon-dev/sudo/src').then(m => m.TaonSudoBackofficeRoutes),
      }),
      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.hasAccess?.toManageCms,
        path: 'cms',
        menuItem: 'CMS',
        expandable: true,
        icon: 'content_copy',
        loader: () =>
          import('@taon-dev/cms/src').then(m => m.TaonCmsBackofficeRoutes),
      }),
      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.hasAccess?.toManagerEcommerce,
        path: 'e-commerce',
        menuItem: 'E-commerce',
        expandable: true,
        icon: 'sell',
        loader: () =>
          import('@taon-dev/e-commerce/src').then(
            m => m.TaonECommerceBackofficeRoutes,
          ),
      }),

      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.hasAccess?.toManageAnalytics,
        path: 'analytics',
        menuItem: 'Analytics',
        expandable: true,
        icon: 'analytics',
        loader: () =>
          import('@taon-dev/analytics/src').then(
            m => m.TaonAnalyticsBackofficeRoutes,
          ),
      }),

      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.hasAccess?.toManageSeo,
        path: 'seo',
        menuItem: 'SEO',
        expandable: true,
        icon: 'query_stats',
        loader: () =>
          import('@taon-dev/seo/src').then(m => m.TaonSeoBackofficeRoutes),
      }),

      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.hasAccess?.toManageMarketing,
        path: 'marketing',
        menuItem: 'Marketing',
        expandable: true,
        icon: 'campaign',
        loader: () =>
          import('@taon-dev/marketing/src').then(
            m => m.TaonMarketingBackofficeRoutes,
          ),
      }),

      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.hasAccess?.toManageUsers,
        path: 'users',
        menuItem: 'Users',
        icon: 'manage_accounts',
        expandable: false,
        loader: () =>
          import('@taon-dev/session/src').then(
            m => m.TaonSessionBackofficeUsersRoutes,
          ),
      }),
      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.hasAccess?.toManageSessions,
        path: 'session',
        menuItem: 'Sessions',
        expandable: false,
        icon: 'login',
        loader: () =>
          import('@taon-dev/session/src').then(
            m => m.TaonSessionBackofficeRoutes,
          ),
      }),
      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.hasAccess?.toManageAuthorization,
        path: 'authorization',
        menuItem: 'Authorization',
        icon: 'apps',
        expandable: true,
        loader: () =>
          import('@taon-dev/session/src').then(
            m => m.TaonAuthorizationBackofficeRoutes,
          ),
      }),
      adminLazyRoute({
        isVisible: ({ context }) =>
          context?.isSuperUser || context?.hasAccess?.toManageEmails,
        path: 'emails',
        menuItem: 'Emails',
        expandable: false,
        icon: 'email',
        loader: () =>
          import('@taon-dev/emails/src').then(
            m => m.TaonEmailsBackofficeRoutes,
          ),
      }),
    ],
  },
];

/**
 * By default exporting TaonBaselineBackofficeRoutes,
 * the command `taon generate:app:routes`
 * will automatically add them to the root routes in ./src/app.ts.
 */
// export default TaonBaselineBackofficeRoutes;
