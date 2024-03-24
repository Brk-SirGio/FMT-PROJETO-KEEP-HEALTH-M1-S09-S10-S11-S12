import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email?.trim();
      const senha = this.loginForm.value.senha?.trim();

      if (email && senha) {
        this.authService.login(email, senha).subscribe(
          (success) => {
            if (success) {
              this.router.navigate(['/home']);
            } else {
              alert('Login ou senha incorreto!');
            }
          },
          (error) => {
            console.error(error);
            alert('Erro ao realizar login. Tente novamente mais tarde.');
          }
        );
      } else {
        alert("Preencha todos os campos!");
      }
    } else {
      alert("Preencha todos os campos corretamente!");
    }
  }
}
