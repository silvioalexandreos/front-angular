import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ClienteService, Cliente } from '../tarefas';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  private unsubscriber = new Subject();

  @ViewChild('formCliente', { static: true }) formCliente: NgForm;

  public clienteForm: FormGroup;
  public clientes: Cliente[];

  public titulo = 'Clientes';
  public clienteSelecionado: Cliente;
  public textSimple: string;
  public msnDeleteCliente: string;
  public modeSave = 'post';
  public cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  cadastrar(): void {
    if (this.formCliente.valid) {

      if (this.modeSave === 'post') {

        if (this.formCliente.form.valid){

          this.clienteService.salvar(this.formCliente.value)
        .subscribe(
          () => {
            this.listarTodos();
            this.router.navigate(["/cliente/"]);
          }, (error: any) => {

            console.error(error.message);
          },
        );

        }
      }
    }
  }

  saveCliente(): void {
    if (this.clienteForm.valid) {


      if (this.modeSave === 'post') {
        this.cliente = {...this.clienteForm.value};
      } else {
        this.cliente = {id: this.clienteSelecionado.id, ...this.clienteForm.value};
      }

      this.clienteService[this.modeSave](this.cliente)
        .pipe(takeUntil(this.unsubscriber))
        .subscribe(
          () => {
            this.listarTodos();
          }, (error: any) => {

            console.error(error.message);
          },
        );
    }
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
