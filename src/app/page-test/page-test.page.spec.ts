import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTestPage } from './page-test.page';

describe('PageTestPage', () => {
  let component: PageTestPage;
  let fixture: ComponentFixture<PageTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
