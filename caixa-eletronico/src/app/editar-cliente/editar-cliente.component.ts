import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Cliente } from '../tarefas';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  @ViewChild('formCadCliente', { static: true }) formCadCliente: NgForm;

  public cliente: Cliente;

  constructor(

    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {}


}
