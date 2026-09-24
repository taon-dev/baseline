//#region imports
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//#endregion

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, RouterOutlet],
})
export class Page2Component {}