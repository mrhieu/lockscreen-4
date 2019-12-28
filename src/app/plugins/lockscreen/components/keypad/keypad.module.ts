import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeypadPageRoutingModule } from './keypad-routing.module';

import { KeypadPage } from './keypad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeypadPageRoutingModule
  ],
  declarations: [KeypadPage]
})
export class KeypadPageModule {}
