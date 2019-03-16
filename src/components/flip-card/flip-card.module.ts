import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FlipCardComponent } from './flip-card';

@NgModule({
  declarations: [
    FlipCardComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    FlipCardComponent
  ]
})
export class FlipCardComponentModule {}
