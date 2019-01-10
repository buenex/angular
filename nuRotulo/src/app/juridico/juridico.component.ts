import { JuridicoModule } from './juridico.module';
import { JuridicoService } from './juridico.service';
import { Component, OnInit, Input } from '@angular/core';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-juridico',
  templateUrl: './juridico.component.html',
  styleUrls: ['./juridico.component.css']
})

export class JuridicoComponent implements OnInit {
 public juridico: Jur = new Jur;
  confirmaSenha = '';

  constructor(private JurService: JuridicoService) {
  }
  submit() {
    if (this.juridico.senha !== this.confirmaSenha) {
      alert('As senhas não conferem!');
      this.confirmaSenha = '';
    } else if (this.juridico.senha === this.confirmaSenha) {
      // logica de inserção
      this.JurService.inserir(this.juridico);
      alert(this.juridico.razaoSocial);
      }
  }

  getClass() {
    return this.juridico;
  }

  clear() {
    this.juridico.razaoSocial = '';
    this.juridico.cnpj = 1000;
    this.juridico.email = '';
    this.juridico.senha = '';
  }
  ngOnInit() {
  }

}

export class Jur {
  razaoSocial: string;
  cnpj: number;
  email: string;
  senha: string;
}
