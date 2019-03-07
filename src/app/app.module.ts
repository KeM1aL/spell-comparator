import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { AppComponent } from './app.component';
import { ComparatorComponent } from './comparator/comparator.component';
import { CardSelectorComponent } from './card-selector/card-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparatorComponent,
    CardSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CommonModule,
    NgtUniversalModule,

    TransferHttpCacheModule,
    HttpClientModule,

    BootstrapModule,

    AppRoutingModule,

    SharedModule
  ],
  providers: [],
})
export class AppModule { }
