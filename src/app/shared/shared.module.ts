import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcMaterialModule } from './material.module';
import { ToolbarComponent } from '../ui/toolbar/toolbar.component';
import { MaterialModule } from './material';

@NgModule({
  imports: [
    CommonModule,
    MdcMaterialModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    ToolbarComponent,
    MdcMaterialModule,
    MaterialModule,
  ],
  declarations: [
    ToolbarComponent
  ]
})
export class SharedModule {
  hideHeader(){
    document.getElementsByTagName('ion-header')[0].style.display = "none";
  }
  showHeader(){
    document.getElementsByTagName('ion-header')[0].style.display = "block";
  }
}
