import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CollapseModule.forRoot()
  ],
  exports: [
    CollapseModule
  ]
})
export class BootstrapModule { }
