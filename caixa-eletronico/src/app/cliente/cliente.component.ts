import { Component, OnInit, OnDestroy, TemplateRef  } from '@angular/core';
import { Cliente, ClienteService } from '../tarefas';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clientes: Cliente[];
  private unsubscriber = new Subject();



  public clienteForm: FormGroup;
  public titulo = 'Clientes';
  public clienteSelecionado: Cliente;
  public textSimple: string;
  public cliente: Cliente;
  public msnDeleteCliente: string;
  public modeSave = 'post';

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.clienteService.listarTodos()
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((clientes: Cliente[]) => {
        this.clientes = clientes;

        if (id > 0) {
          this.clienteSelect(this.clientes.find(cliente => cliente.id === id));
        }

      }
    );
  }

  clienteSelect(cliente: Cliente): void {
    this.modeSave = 'put';
    this.clienteSelecionado = cliente;
    this.clienteForm.patchValue(cliente);
  }
}
