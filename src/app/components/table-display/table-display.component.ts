import { Component, OnInit, Input } from '@angular/core';
import {TableItems} from '../../classes/table-items';
import {TABLE_ITEMS} from '../../constants/table-data.constant';
import {TableHeaders} from '../../classes/table-headers';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent implements OnInit {

  @Input() headers: TableHeaders[];
  @Input() items: TableItems[];

  selectedItems: TableItems[] = [];
  availableItemsCount: number = 0;
  AVAILABLE = 'available';
  STATUS = 'status';

  constructor() { }

  ngOnInit(): void {
    this.availableItemsCount = this.items.filter(i => i.status === this.AVAILABLE).length;
  }

  selectItem(item: TableItems): void {
    const idx = this.selectedItems.indexOf(item);
    if (idx === -1) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(idx, 1);
    }
  }

  selectAll():void {
    const availableItems = this.items.filter(i => i.status === this.AVAILABLE);
    if (availableItems.length === this.selectedItems.length) {
      this.selectedItems.length = 0;
    } else {
      this.selectedItems = [...availableItems];
    }
  }

  downloadSelected(): void {
    let msg = `No Selections have been made`;
    if (this.selectedItems.length) {
      msg = ``;
      this.selectedItems.forEach(item => {
        msg += `Path: ${item.path} \nDevice: ${item.device}\n\n`;
      });
    }
    alert(msg);
  }
}
