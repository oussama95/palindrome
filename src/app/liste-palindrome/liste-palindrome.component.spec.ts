import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePalindromeComponent } from './liste-palindrome.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ListePalindromeComponent', () => {
  let component: ListePalindromeComponent;
  let fixture: ComponentFixture<ListePalindromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ListePalindromeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
