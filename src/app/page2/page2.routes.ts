//#region imports
import { Routes } from '@angular/router';
import { adminLazyRoute } from '@taon-dev/ui/src';
//#endregion

export const Page2Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./page2.component').then(m => m.Page2Component),

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
 * By default exporting Page2Routes,
 * the command `taon generate:app:routes`
 * will automatically add them to the root routes in ./src/app.ts.
 */
// export default Page2Routes;