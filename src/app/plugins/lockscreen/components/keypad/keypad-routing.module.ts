import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeypadPage } from './keypad.page';

const routes: Routes = [
  {
    path: '',
    component: KeypadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeypadPageRoutingModule {}
