import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  isShowMenu =  false
  isSidenavOpen = false;

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
