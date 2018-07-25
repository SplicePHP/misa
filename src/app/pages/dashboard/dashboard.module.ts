import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material';
import { SharedModule } from '../../shared/shared.module';


import {
  MdcFabModule,
  MdcMenuModule,
  MdcIconModule
} from '@angular-mdc/web';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    // BrowserAnimationsModule,
    MaterialModule,
    MdcFabModule,
    MdcMenuModule,
    MdcIconModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,

    RouterModule.forChild([
      {
        path: '',
        component: DashboardPage
      }
    ])
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [
    DashboardPage
  ]
})
export class DashboardPageModule {}
