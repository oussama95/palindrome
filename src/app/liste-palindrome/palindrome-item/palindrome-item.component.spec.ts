import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeItemComponent } from './palindrome-item.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PalindromeItemComponent', () => {
  let component: PalindromeItemComponent;
  let fixture: ComponentFixture<PalindromeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PalindromeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
