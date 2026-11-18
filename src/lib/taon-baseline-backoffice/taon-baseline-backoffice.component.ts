//#region imports
import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TaonAdminContentFooterService,
  TaonAdminLayoutComponent,
} from '@taon-dev/ui/src';
import { TaonBaselineBackofficeOutletName } from '@taon-dev/ui/src';

import { TaonBaselineBackofficeRoutes } from './taon-baseline-backoffice.routes';
//#endregion

@Component({
  selector: 'app-taon-baseline-backoffice',
  templateUrl: './taon-baseline-backoffice.component.html',
  styleUrls: ['./taon-baseline-backoffice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, RouterOutlet, TaonAdminLayoutComponent, CommonModule],
})
export class TaonBaselineBackofficeComponent {
  taonAdminContentFooterService = inject(TaonAdminContentFooterService);


  get adminRoutes() {
    return TaonBaselineBackofficeRoutes[0].children;
  }

  outlet = TaonBaselineBackofficeOutletName;
}
