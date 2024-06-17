import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilebuilderComponent } from './profilebuilder.component';

describe('ProfilebuilderComponent', () => {
  let component: ProfilebuilderComponent;
  let fixture: ComponentFixture<ProfilebuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilebuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilebuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
