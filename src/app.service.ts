import { Injectable, signal } from '@angular/core';

import { TaonAuthContextEntityDecorator } from './app.decorators';

@Injectable({ providedIn: 'root' })
export class AppService {
  context = signal<TaonAuthContextEntityDecorator>(null);
}
