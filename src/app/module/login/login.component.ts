import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, FormsModule, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormControl('', [Validators.required, Validators.minLength(4)]);
  passwordForm = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router){}

  login(){
    this.router.navigate(['/home']);

  }
  
  register(){
    this.router.navigate(['/register']);
  }
}
