import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Saque } from '../tarefas/shared/saque.model';
import { SaqueService } from '../tarefas/shared/saque.service';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css']
})
export class TransacaoComponent implements OnInit {

  public saques: Saque[];
  private unsubscriber = new Subject();

  public saqueForm: FormGroup;
  public titulo = 'Saque';
  public saqueSelecionado: Saque;
  public textSimple: string;
  public saquee: Saque;
  public msnDeleteSaque: string;
  public modeSave = 'post';

  constructor(
    private saqueService: SaqueService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.saque();
  }

  saque(): void {
    if (this.saqueForm.valid) {


      if (this.modeSave === 'post') {
        this.saque = {...this.saqueForm.value};
      } else {
        this.saque = {id: this.saqueSelecionado.id, ...this.saqueForm.value};
      }

      this.saqueService[this.modeSave](this.saque)
        .pipe(takeUntil(this.unsubscriber))
        .subscribe(

        );
    }
  }

  saqueSelect(saque: Saque): void {
    this.modeSave = 'put';
    this.saqueSelecionado = saque;
    this.saqueForm.patchValue(saque);
  }
}
