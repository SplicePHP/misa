import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SandboxPage } from './sandbox.page';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: SandboxPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SandboxPage]
})
export class SandboxPageModule {}
