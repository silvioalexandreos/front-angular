import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService, Cliente } from '../tarefas';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  @ViewChild('formCliente', { static: true }) formCliente: NgForm;
  cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  cadastrar(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.post(this.cliente);
      this.router.navigate(["/cliente"]);
    }
  }
}
