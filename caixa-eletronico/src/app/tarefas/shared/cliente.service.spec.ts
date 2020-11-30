import { TestBed } from '@angular/core/testing';

import { TarefaService } from './cliente.service';

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
