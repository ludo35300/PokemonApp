import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTroupeComponent } from './list-troupe.component';

describe('ListPokemonComponent', () => {
  let component: ListTroupeComponent;
  let fixture: ComponentFixture<ListTroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTroupeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListTroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
