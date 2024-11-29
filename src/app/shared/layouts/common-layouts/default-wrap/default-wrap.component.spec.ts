import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWrapComponent } from './default-wrap.component';

describe('DefaultWrapComponent', () => {
  let component: DefaultWrapComponent;
  let fixture: ComponentFixture<DefaultWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultWrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
