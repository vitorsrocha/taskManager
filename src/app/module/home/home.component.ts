import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, CdkDropListGroup, CdkDropList, CdkDrag, MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  inprogress = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  review = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
