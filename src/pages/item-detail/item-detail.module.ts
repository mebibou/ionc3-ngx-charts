import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ItemDetailPage } from './item-detail';

@NgModule({
  declarations: [
    ItemDetailPage
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(ItemDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule { }
