//#region imports
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { TaonCmsWebsiteFeatureApiService } from '@taon-dev/cms/src';
import {
  TaonCourseComponent,
  TaonCourseTabsComponent,
} from '@taon-dev/e-commerce/src';
import { TaonUnderConstructionComponent } from '@taon-dev/ui/src';

import { AppService } from '../../app.service';
//#endregion

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    RouterOutlet,

    TaonCourseComponent,
    TaonCourseTabsComponent,
    TaonUnderConstructionComponent,
  ],
  providers: [TaonCmsWebsiteFeatureApiService],
})
export class Page1Component {
  private readonly appService = inject(AppService);

  private readonly taonCmsWebsiteFeatureApiService = inject(
    TaonCmsWebsiteFeatureApiService,
  );

  readonly isTaonCourseEnabled = toSignal(
    this.taonCmsWebsiteFeatureApiService.isEnabled$('enable-course-bachata'),
    {
      initialValue: false,
    },
  );

  readonly isTaonP1CourseEnabled = toSignal(
    this.taonCmsWebsiteFeatureApiService.isEnabled$('enable-course-bachata-p1'),
    {
      initialValue: false,
    },
  );

  readonly isTaonP2CourseEnabled = toSignal(
    this.taonCmsWebsiteFeatureApiService.isEnabled$('enable-course-bachata-p2'),
    {
      initialValue: false,
    },
  );

  context() {
    return this.appService.context();
  }
}
