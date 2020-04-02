import { async, TestBed } from '@angular/core/testing';
import { Ng2GuiModule } from './ng2-gui.module';

describe('Ng2GuiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Ng2GuiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Ng2GuiModule).toBeDefined();
  });
});
