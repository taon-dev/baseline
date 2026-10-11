//#region imports
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaonAdminLayoutComponent } from '@taon-dev/ui/src';
import { TaonBaselineBackofficeOutletName } from '@taon-dev/ui/src';

import { ENV_ANGULAR_NODE_APP_WEBSITE_TITLE } from '../env'; // @notForNpm

import { TaonBaselineBackofficeRoutes } from './taon-baseline-backoffice.routes';
//#endregion

@Component({
  selector: 'app-taon-baseline-backoffice',
  templateUrl: './taon-baseline-backoffice.component.html',
  styleUrls: ['./taon-baseline-backoffice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, RouterOutlet, TaonAdminLayoutComponent],
})
export class TaonBaselineBackofficeComponent {
  get titleFromEnv(): string {
    //#region @notForNpm
    return ENV_ANGULAR_NODE_APP_WEBSITE_TITLE;
    //#endregion
    return '';
  }

  title = this.titleFromEnv || 'Application Title';

  get adminRoutes() {
    return TaonBaselineBackofficeRoutes[0].children;
  }

  outlet = TaonBaselineBackofficeOutletName;
}
