import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaErrorPageComponent } from './anna-error-page-input.component';

describe('AnnaErrorPageComponent', () => {
  let component: AnnaErrorPageComponent;
  let fixture: ComponentFixture<AnnaErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnaErrorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnaErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
