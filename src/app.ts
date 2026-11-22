//#region imports
import * as os from 'os'; // @backend

import { AsyncPipe, JsonPipe, NgFor } from '@angular/common'; // @browser
import {
  inject,
  Injectable,
  APP_INITIALIZER,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  isDevMode,
  mergeApplicationConfig,
  provideZonelessChangeDetection,
  signal,
} from '@angular/core'; // @browser
import { Component } from '@angular/core'; // @browser
import { VERSION, OnInit } from '@angular/core'; // @browser
import { toSignal } from '@angular/core/rxjs-interop'; // @browser
import { MatButtonModule } from '@angular/material/button'; // @browser
import { MatCardModule } from '@angular/material/card'; // @browser
import { MatDialog } from '@angular/material/dialog'; // @browser
import { MatDividerModule } from '@angular/material/divider'; // @browser
import { MatIconModule } from '@angular/material/icon'; // @browser
import { MatListModule } from '@angular/material/list'; // @browser
import { MatTabsModule } from '@angular/material/tabs'; // @browser
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideRouter,
  Router,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  ActivatedRoute,
  Routes,
  Route,
  withHashLocation,
  withComponentInputBinding,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { RenderMode, ServerRoute } from '@angular/ssr';
import Aura from '@primeng/themes/aura'; // @browser
import { MIGRATIONS_CLASSES_FOR_TaonAnalyticsAbstractContext } from '@taon-dev/analytics/src';
import { TaonBaselineAbstractContext } from '@taon-dev/baseline/src';
import {
  CmsContext_1792506757808_applicaitonHooks,
  MIGRATIONS_CLASSES_FOR_TaonCmsAbstractContext,
  TaonCmsContentProvider,
} from '@taon-dev/cms/src';
import {
  MIGRATIONS_CLASSES_FOR_TaonECommerceAbstractContext,
  TaonECommerceCartProvider,
} from '@taon-dev/e-commerce/src';
import { Translation, TranslationManager } from '@taon-dev/i18n/src';
// TranslationManager.globalDefautlLanguageOverride = 'pl-PL';
import { TranslateDirective } from '@taon-dev/i18n/src'; // @browser
import { MIGRATIONS_CLASSES_FOR_TaonMarketingAbstractContext } from '@taon-dev/marketing/src';
import { MIGRATIONS_CLASSES_FOR_TaonSeoAbstractContext } from '@taon-dev/seo/src';
import {
  MIGRATIONS_CLASSES_FOR_TaonSessionAbstractContext,
  SessionContext_1791132517216_initial,
  TaonAuthContextEntity,
  TaonAuthContextRepository,
  TaonSessionProvider,
} from '@taon-dev/session/src';
import { TaonSessionButtonComponent } from '@taon-dev/session/src'; // @browser
import { MIGRATIONS_CLASSES_FOR_TaonSudoAbstractContext } from '@taon-dev/sudo/src';
import { TaonBaselineBackofficeOutletName } from '@taon-dev/ui/src'; // @browser
import { TaonDraggableButtonPanelComponent } from '@taon-dev/ui/src'; // @browser
import { providePrimeNG } from 'primeng/config'; // @browser
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import {
  Taon,
  TaonBaseContext,
  TAON_CONTEXT,
  EndpointContext,
  TaonBaseAngularService,
  TaonEntity,
  StringColumn,
  TaonBaseAbstractEntity,
  TaonBaseCrudController,
  TaonController,
  GET,
  TaonMigration,
  TaonBaseMigration,
  TaonContext,
  ClassHelpers,
} from 'taon/src';
import { TaonAdminService, TaonAdmin } from 'taon/src'; // @browser
import { TaonStor } from 'taon-storage/src';
import {
  TaonNotFoundComponent,
  TaonSettingsComponent,
  TaonSimpleLayoutComponent,
  TaonSimpleLayoutNavItem,
  TaonThemeComponent,
  TaonThemeService,
} from 'taon-ui/src'; // @browser
import { Utils, UtilsOs } from 'tnp-core/src';

import {
  CmsContext_1792506757808_applicaitonHooks_decorator,
  SessionContext_1791132517217_initial_decorator,
  TaonAuthContextEntityDecorator,
  TaonAuthContextRepositoryDecorator,
  TaonCmsContentProviderDecorator,
  TaonECommerceCartProviderDecorator,
  TaonSessionProviderDecorator,
} from './app.decorators';
import { HOST_CONFIG } from './app.hosts';
import { ENV_ANGULAR_NODE_APP_BUILD_PWA_DISABLE_SERVICE_WORKER } from './lib/env/env.angular-node-app';

// @placeholder-for-imports

//#endregion

//#region constants
console.log('🚀 [ TAON IS STARTING ]');
const t = Translation.for(Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP, {
  // debug: true
});
//#endregion

//#region baseline component
//#region @browser
@Component({
  selector: 'app-root',

  imports: [
    // RouterOutlet,
    AsyncPipe,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    RouterModule,
    TranslateDirective,
    TaonDraggableButtonPanelComponent,
    TaonSessionButtonComponent,
    TaonSimpleLayoutComponent,
    JsonPipe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class BaselineApp implements OnInit {
  t = t.for(this);

  exampleUserTitle = this.t.signal.gettext('Example users from backend API:');

  /**Required for proper theme*/
  theme = inject(TaonThemeService);

  taonAdminService = inject(TaonAdminService);

  dialog = inject(MatDialog);

  activatedRoute = inject(ActivatedRoute);

  router = inject(Router);

  itemsLoaded = signal(false);

  year = new Date().getFullYear();

  taonMode = UtilsOs.isRunningInWebSQL() ? 'websql' : 'normal nodejs';

  angularVersion = VERSION.full;

  outlet = TaonBaselineBackofficeOutletName;

  forceShowBaseRootApp = false;

  basePath!: string;

  navItems: TaonSimpleLayoutNavItem[] = [
    {
      label: 'Page 1',
      path: 'page1',
    },
    {
      label: 'Page 2',
      path: 'page2',
    },
  ];

  openDialog(
    enterAnimationDuration: string | number,
    exitAnimationDuration: string | number,
  ): void {
    this.dialog.open(TaonSettingsComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
    this.basePath = BaselineClientRoutes.find(
      c => c.outlet === TaonBaselineBackofficeOutletName,
    )?.path!;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(globalThis?.location.pathname);
    // TODO set below from 1000 to zero in production
    void Taon.removeLoader(1000).then(() => {
      this.itemsLoaded.set(true);
    });
  }
}
//#endregion
//#endregion

//#region  baseline routes
//#region @browser
export const BaselineServerRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
export const BaselineClientRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app/sample-app/sample-app.routes').then(m => m.SampleAppRoutes),
  },
  {
    path: 'page1',
    loadChildren: () =>
      import('./app/page1/page1.routes').then(m => m.Page1Routes),
  },
  {
    path: 'page2',
    loadChildren: () =>
      import('./app/page2/page2.routes').then(m => m.Page2Routes),
  },
  {
    path: 'backoffice',
    outlet: TaonBaselineBackofficeOutletName,
    providers: [
      {
        provide: TAON_CONTEXT,
        useFactory: () => BaselineContext,
      },
    ],
    loadChildren: () =>
      import('@taon-dev/baseline/src').then(
        m => m.TaonBaselineBackofficeRoutes,
      ),
  },
];
//#endregion
//#endregion

//#region  baseline app configs
//#region @browser
export const BaselineAppConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    {
      provide: TAON_CONTEXT,
      useFactory: () => BaselineContext,
    },
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => BaselineStartFunction,
    },
    provideBrowserGlobalErrorListeners(),
    // remove withHashLocation() to use SSR
    provideRouter(
      BaselineClientRoutes,
      withHashLocation(),
      withComponentInputBinding(),
    ),
    provideClientHydration(withEventReplay()),
    provideServiceWorker('ngsw-worker.js', {
      enabled:
        !isDevMode() && !ENV_ANGULAR_NODE_APP_BUILD_PWA_DISABLE_SERVICE_WORKER,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};

export const BaselineServerConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(BaselineServerRoutes))],
};

export const BaselineConfig = mergeApplicationConfig(
  BaselineAppConfig,
  BaselineServerConfig,
);
//#endregion
//#endregion

//#region  baseline context
var BaselineContext = Taon.createContext(() => ({
  ...HOST_CONFIG['BaselineContext'],
  contexts: { TaonBaseContext, TaonBaselineAbstractContext },
  providers: {
    [ClassHelpers.getName(TaonSessionProvider)]: TaonSessionProviderDecorator,
    [ClassHelpers.getName(TaonCmsContentProvider)]:
      TaonCmsContentProviderDecorator,
    [ClassHelpers.getName(TaonECommerceCartProvider)]:
      TaonECommerceCartProviderDecorator,
  },
  entities: {
    [ClassHelpers.getName(TaonAuthContextEntity)]:
      TaonAuthContextEntityDecorator,
  },
  repositories: {
    [ClassHelpers.getName(TaonAuthContextRepository)]:
      TaonAuthContextRepositoryDecorator,
  },
  migrations: {
    ...MIGRATIONS_CLASSES_FOR_TaonSessionAbstractContext,
    ...MIGRATIONS_CLASSES_FOR_TaonCmsAbstractContext,
    ...MIGRATIONS_CLASSES_FOR_TaonECommerceAbstractContext,
    ...MIGRATIONS_CLASSES_FOR_TaonAnalyticsAbstractContext,
    ...MIGRATIONS_CLASSES_FOR_TaonMarketingAbstractContext,
    ...MIGRATIONS_CLASSES_FOR_TaonSeoAbstractContext,
    ...MIGRATIONS_CLASSES_FOR_TaonSudoAbstractContext,

    // decorators
    [ClassHelpers.getName(SessionContext_1791132517216_initial)]:
      SessionContext_1791132517217_initial_decorator,
    [ClassHelpers.getName(CmsContext_1792506757808_applicaitonHooks)]:
      CmsContext_1792506757808_applicaitonHooks_decorator,
    // ...MIGRATIONS_CLASSES_FOR_WwwMattbachataPl,
  },

  database: true,
  disabledRealtime: true,
}));
//#endregion

//#region  baseline start function
export const BaselineStartFunction = async (
  startParams?: Taon.StartParams,
): Promise<void> => {
  TranslationManager.Instance.visibleLanguages = ['en-US', 'pl-PL'];
  // await TranslationManager.Instance.changeGlobalLang('en-US');

  // await TranslationManager.Instance.setOneLanguagePernament('en-US')

  //#region @browser
  TaonAdmin.init();
  await TaonStor.awaitAll();
  //#endregion

  await BaselineContext.initialize(startParams);

  //#region @backend
  //#region @esmRemove
  if (
    startParams?.onlyMigrationRun ||
    startParams?.onlyMigrationRevertToTimestamp
  ) {
    process.exit(0);
  }
  //#endregion
  //#endregion

  //#region @backend
  //#region @esmRemove
  console.log(`Hello in NodeJs backend! os=${os.platform()}`);
  //#endregion
  //#endregion
};
//#endregion

//#region default export
export default BaselineStartFunction;
//#endregion
