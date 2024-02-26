import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTroupeComponent } from './list-troupe/list-troupe.component';
import { DetailTroupeComponent } from './detail-troupe/detail-troupe.component';
import { TroupeTypeColorPipe } from './troupe-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { TroupeService } from './troupe.service';



@NgModule({
  imports: [
    ListTroupeComponent,
    DetailTroupeComponent,
    TroupeTypeColorPipe,
    BorderCardDirective,
    CommonModule
  ],
  providers: [TroupeService]
})
export class TroupeModule { }
