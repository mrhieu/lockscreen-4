import { Component } from '@angular/core';
import { LockscreenService } from '../plugins/lockscreen/services/lockscreen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isCorrect: Boolean = false;

  constructor(private lockscreenService: LockscreenService) {

  }

  ngOnInit() {
    this.showLockscreen();
  }

  showLockscreen() {
    const CORRECT_PASSCODE = '1234';

    this.lockscreenService.show({passcode: CORRECT_PASSCODE, enableTouchId: true})
      .then((response: any) => {
        const { data } = response;
        
        console.info('Response from lockscreen modal: ', data);

        if (data.type === 'dismiss') {
          this.isCorrect = data.data;
        } else {
          this.isCorrect = false;
        }
      })
  }

}
