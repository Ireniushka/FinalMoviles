import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateFilesPage } from './create-files.page';

describe('CreateFilesPage', () => {
  let component: CreateFilesPage;
  let fixture: ComponentFixture<CreateFilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
