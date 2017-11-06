import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRowerowComponent } from './lista-rowerow.component';

describe('ListaRowerowComponent', () => {
  let component: ListaRowerowComponent;
  let fixture: ComponentFixture<ListaRowerowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRowerowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRowerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
