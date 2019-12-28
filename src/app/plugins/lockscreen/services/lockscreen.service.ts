import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KeypadPage } from '../components/keypad/keypad.page';

@Injectable()
export class LockscreenService {

  constructor(private modalCtrl: ModalController) {

  }

  async show(options = {}) {
    // Extend the default options
    const extendedOptions = Object.assign({
      passcode: '1234',
      enableTouchId: true
    }, options);

    const modal = await this.modalCtrl.create({
      component: KeypadPage,
      backdropDismiss: false,
      componentProps: {
        ...extendedOptions
      }
    });

    modal.present();

    return modal.onDidDismiss();
  }
}
