import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  isShowMenu =  false
  isSidenavOpen = false;

  constructor(){

  }

  showMenu(){
    this.isShowMenu = !this.isShowMenu;    
  }

  openMenu() {
    this.isShowMenu = true;
  }

  closeMenu() {
    this.isShowMenu = false;
  }

}
