import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeypadPage } from './keypad.page';

describe('KeypadPage', () => {
  let component: KeypadPage;
  let fixture: ComponentFixture<KeypadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeypadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeypadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
