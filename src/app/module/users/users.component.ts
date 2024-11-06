import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

export interface UsersElement {
  name: string;
  position: number;
  team: string;
  symbol: string;
}

const ELEMENT_DATA: UsersElement[] = [
  {position: 1, name: 'vitor', team: "web", symbol: 'H'},
  {position: 2, name: 'vitor', team: "web", symbol: 'H'},
  {position: 3, name: 'vitor', team: "web", symbol: 'H'},
  {position: 4, name: 'vitor', team: "web", symbol: 'H'},
  {position: 5, name: 'vitor', team: "web", symbol: 'H'},
  {position: 6, name: 'vitor', team: "web", symbol: 'H'},
  {position: 7, name: 'vitor', team: "web", symbol: 'H'},
  {position: 8, name: 'vitor', team: "web", symbol: 'H'},

];

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatIconModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'options'];
  dataSource = ELEMENT_DATA;

  edit(element: UsersElement){
    console.log(element);
    
  }

  delete(element: UsersElement){
    console.log(element);
  }
}