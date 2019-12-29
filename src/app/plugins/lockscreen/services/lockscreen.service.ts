import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KeypadPage } from '../components/keypad/keypad.page';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

const TYPE_FINGER = 'finger';

@Injectable()
export class LockscreenService {
  authType: string = '';

  constructor(private modalCtrl: ModalController, private fingerprint: FingerprintAIO) {

  }

  async verify(options = {}) {
    // Extend the default options
    const extendedOptions = Object.assign({
      passcode: '1234',
      enableTouchIdFaceId: true,
    }, options);

    if (extendedOptions.enableTouchIdFaceId) {
      return this.useTouchIdFaceId()
        .then(() => {
          return {
            data: {
              type: 'dismiss',
              data: true,
            }
          };
        }).catch((error: any) => {
          console.log(`ERROR: ${this.authType}`, error);
          return this.useKeypad(extendedOptions);
        })
    } else {
      return this.useKeypad(extendedOptions);
    }
  }

  async useKeypad(options: object) {
    const modal = await this.modalCtrl.create({
      component: KeypadPage,
      backdropDismiss: false,
      cssClass: 'modal-fullscreen',
      componentProps: {
        ...options
      }
    });

    modal.present();

    return modal.onDidDismiss();
  }

  async useTouchIdFaceId() {
    return this.fingerprint.isAvailable()
      .then(type => {
        // See more: https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio#check-if-fingerprint-authentication-is-available
        this.authType = type === TYPE_FINGER ? 'Touch ID' : 'Face ID';

        return this.fingerprint.show({
          title: 'Title for Android only',
          subtitle: 'Sub title for Android only',
          description: `Authenticate with ${this.authType}`, // Only for iOS
          fallbackButtonTitle: 'Enter Passcode', // Only for iOS
          disableBackup: true, // IMPORTANT: We're implementing our own fallback using the keypad UI
        });
      })
  }
}
