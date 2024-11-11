import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taskManager';
  showMenu = false
  constructor(private router: Router){
    this.isLogin()
  }

  isLogin(){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {   
      console.log(this.router.url);
      this.showMenu = this.router.url !== '/login';
    });
  }
}
