import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTroupeComponent } from './detail-troupe.component';

describe('DetailTroupeComponent', () => {
  let component: DetailTroupeComponent;
  let fixture: ComponentFixture<DetailTroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTroupeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailTroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
