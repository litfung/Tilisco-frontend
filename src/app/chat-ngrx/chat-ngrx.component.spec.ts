import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNgrxComponent } from './chat-ngrx.component';

describe('ChatNgrxComponent', () => {
  let component: ChatNgrxComponent;
  let fixture: ComponentFixture<ChatNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
