import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule], //Importação do Modulo de Reative Forms
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl(''),
    codigoUsuario: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl(''),
  });

  cadastrar() {
    if (this.form.value.senha === this.form.value.confirmarSenha) {
      const usuario = {
        codigoUsuario: this.form.value.codigoUsuario,
        senha: this.form.value.senha
      }
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    }
  }
}
