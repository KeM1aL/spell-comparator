import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule, CardService } from './shared';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { AppComponent } from './app.component';
import { ComparatorComponent } from './comparator/comparator.component';
import { CardSelectorComponent } from './card-selector/card-selector.component';
import { loadCards, loadRarities } from './shared/factory';

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
  providers: [
      CardService,
      {
        provide: APP_INITIALIZER,
        useFactory: loadCards,
        deps: [CardService], // dependancy
        multi: true
      },
      {
        provide: APP_INITIALIZER,
        useFactory: loadRarities,
        deps: [CardService], // dependancy
        multi: true
      }
  ],
})
export class AppModule { }
