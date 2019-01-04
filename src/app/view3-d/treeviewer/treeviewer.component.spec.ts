import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewerComponent } from './treeviewer.component';

describe('TreeviewerComponent', () => {
  let component: TreeviewerComponent;
  let fixture: ComponentFixture<TreeviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
