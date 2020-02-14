import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualitePage } from './actualite.page';

describe('ActualitePage', () => {
  let component: ActualitePage;
  let fixture: ComponentFixture<ActualitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
