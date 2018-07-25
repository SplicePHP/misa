import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducers/tutorial.reducer';
import { ReadComponent } from '../read/read.component';
import { CreateComponent } from '../create/create.component';

// import { MdcTextField, MdcLineRipple, MdcNotchedOutline, MdcTextarea } from '@angular-mdc/web';
import { MdcTextFieldModule } from '@angular-mdc/web';
@NgModule({
  imports: [
    StoreModule.forRoot({
      tutorial: reducer
    }),
    CommonModule
  ],
  exports: [
    CommonModule,
    ReadComponent,
    CreateComponent,
    MdcTextFieldModule
    // MdcTextField,
    // MdcLineRipple,
    // MdcNotchedOutline,
    // MdcTextarea
  ],
  declarations: [
    ReadComponent,
    CreateComponent,
    // MdcTextField,
    // MdcLineRipple,
    // MdcNotchedOutline,
    // MdcTextarea
  ]
})
export class SharedModule { }
