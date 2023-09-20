import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {NgFor} from '@angular/common';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sort predicate
 */
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag],
})
export class DragDropComponent  implements OnInit{
  numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private vc: ViewContainerRef) {
    
  }
  ngOnInit(): void {
    this.vc.element.nativeElement.style.setProperty('--item-bg', 'purple');
  }


  drop(event: CdkDragDrop<unknown>) {
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }

  /**
   * Predicate function that only allows even numbers to be
   * sorted into even indices and odd numbers at odd indices.
   */
  sortPredicate(index: number, item: CdkDrag<number>) {
    return (index + 1) % 2 === item.data % 2;
  }
}