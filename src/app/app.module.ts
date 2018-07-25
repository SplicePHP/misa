import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DrawerComponent } from './drawer/drawer.component';
import { NavComponent } from './nav/nav.component';

import { MdcMaterialModule } from './material.module';

// import { StoreModule } from '@ngrx/store';
// import { reducer } from './reducers/tutorial.reducer';
// import { ReadComponent } from './read/read.component';
// import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DrawerComponent,
    NavComponent,
    // SidebarComponent,
    // ReadComponent,
    // CreateComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    MdcMaterialModule
    // StoreModule.forRoot({
    //   tutorial: reducer
    // })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
