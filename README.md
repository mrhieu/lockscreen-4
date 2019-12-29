# Ionic 4 Lockscreen-4

Provide a lockscreen UI that supports TouchID/FaceID, plus a beautiful keypad UI.

[DEMO](https://stackblitz.com/github/mrhieu/lockscreen-4)

(For some reason some dependencies are missing on Stackblitz side. Keep clicking INSTALL MISSING DEPENDENCIES until the demo shows up)

## Setup

After cloning or downloading this project.

Install Ionic CLI

```
$ npm install -g ionic
```

Install dependencies

```
$ cd <project>
$ npm install
```

Run the app on a real device or simulator (to see how Touch ID/ Face ID works)

```
$ ionic cordova emulate ios
```

Or, just want to see the keypad UI:

```
$ ionic serve
```

See more at [Get started with Ionic](https://ionicframework.com/getting-started/)

## Lockscreen Module

In this module:

- Component: KeypadPage
- Service: LockscreenService
- sass/modal.scss (for fullscreen modal): needs to be included in global.scss

Dependencies:

- TapticEngine (https://ionicframework.com/docs/native/taptic-engine)
- FingerprintAIO (https://ionicframework.com/docs/native/fingerprint-aio)


### Usage

Include LockscreenModule in src/app/app.module.ts

```
import { LockscreenModule } from './plugins/lockscreen/lockscreen.module';

...
@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LockscreenModule,
  ],
```

Include LockscreenService in src/app/home/home.page.ts

```
import { LockscreenService } from '../plugins/lockscreen/services/lockscreen.service';

...

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
```

## Contact
If you have any questions, don't hesitate to send me a message: [mr_hie@yahoo.com](mailto:mr_hie@yahoo.com)

Homepage: [https://www.takethatdesign.com](https://www.takethatdesign.com)
