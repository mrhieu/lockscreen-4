import { Component } from '@angular/core';
import { LockscreenService } from '../plugins/lockscreen/services/lockscreen.service';

const CORRECT_PASSCODE = '1234';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isCorrect: Boolean = false;
  enableTouchIdFaceId: Boolean = true;

  constructor(private lockscreenService: LockscreenService) {

  }

  showLockscreen() {
    const options = {
      passcode: CORRECT_PASSCODE,
      enableTouchIdFaceId: this.enableTouchIdFaceId,
    };

    this.lockscreenService.verify(options)
      .then((response: any) => {
        const { data } = response;

        console.info('Response from lockscreen service: ', data);

        if (data.type === 'dismiss') {
          this.isCorrect = data.data;
        } else {
          this.isCorrect = false;
        }
      })
  }
}
