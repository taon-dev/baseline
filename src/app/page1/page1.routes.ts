//#region imports
import { Routes } from '@angular/router';
import { adminLazyRoute } from '@taon-dev/ui/src';
//#endregion

export const Page1Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./page1.component').then(m => m.Page1Component),

    children: [
      // adminLazyRoute({
      //   path: 'dashboard',
      //   menuItem: 'Dashboard',
      //   icon: 'dashboard',
      //   expandable: false,
      //   loader: () =>
      //     import('./anothermodule.routes').then(m => m.DashboardRoutes),
      // }),
    ],
  },
];

/**
 * By default exporting Page1Routes,
 * the command `taon generate:app:routes`
 * will automatically add them to the root routes in ./src/app.ts.
 */
// export default Page1Routes;