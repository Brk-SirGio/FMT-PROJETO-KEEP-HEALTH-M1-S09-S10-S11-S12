import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoDietasComponent } from './detalhamento-dietas.component';

describe('DetalhamentoDietasComponent', () => {
  let component: DetalhamentoDietasComponent;
  let fixture: ComponentFixture<DetalhamentoDietasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhamentoDietasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhamentoDietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
