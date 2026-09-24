//#region imports
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//#endregion

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, RouterOutlet],
})
export class Page1Component {}