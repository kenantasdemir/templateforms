import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosformComponent } from './infosform.component';

describe('InfosformComponent', () => {
  let component: InfosformComponent;
  let fixture: ComponentFixture<InfosformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfosformComponent]
    });
    fixture = TestBed.createComponent(InfosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
