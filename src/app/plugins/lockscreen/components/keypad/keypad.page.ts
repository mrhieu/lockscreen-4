import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TapticEngine } from '@ionic-native/taptic-engine/ngx';

const DEFAULT_THEME_COLOR: string = 'dark';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.page.html',
  styleUrls: ['./keypad.page.scss'],
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }
})
export class KeypadPage {
  themeColor: string = DEFAULT_THEME_COLOR;
  inputCombination: string = '';
  dots: any[] = [];
  isIncorrect: Boolean = false;
  @Input() passcode: string;
  @Input() enableTouchId: Boolean;

  constructor(private modalCtrl: ModalController, private taptic: TapticEngine) {

  }

  ionViewWillEnter() {
    for (let i = 0; i < this.passcode.length; i++) {
      this.dots.push({
        active: false
      })
    }
  }

  add(number: number) {
    if (this.inputCombination.length < this.passcode.length) {
      this.inputCombination += '' + number;
      this.updateDots();

      if (this.inputCombination.length === this.passcode.length) {
        this.verify();
      }
    }
  }

  delete() {
    if (this.inputCombination.length > 0) {
      this.inputCombination = this.inputCombination.slice(0, -1);
      this.updateDots();
    }
  }

  clear() {
    this.inputCombination = '';
    this.updateDots();
  }

  verify() {
    if (this.inputCombination === this.passcode) {
      console.info('CORRECT PASSCODE!');
      this.dismiss();
    } else {
      this.isIncorrect = true;
      this.taptic.notification({type: 'error'});
      setTimeout(() => {
        this.clear();
        this.isIncorrect = false;
      }, 1000);
    }
  }

  updateDots() {
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].active = i < this.inputCombination.length ? true : false;
    }
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key.match(/[0-9]/i)) {
      this.add(parseInt(event.key));
    } else if (event.key === 'Backspace') {
      this.delete();
    }
  }

  cancel() {
    this.modalCtrl.dismiss({
      type: 'cancel'
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({
      type: 'dismiss',
      data: true
    })
  }

}
