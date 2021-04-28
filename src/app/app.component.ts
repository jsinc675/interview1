import { Component } from '@angular/core';
import {TableItems} from './classes/table-items';
import {TABLE_HEADERS, TABLE_ITEMS} from './constants/table-data.constant';
import {TableHeaders} from './classes/table-headers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: TableItems[] = TABLE_ITEMS;
  headers: TableHeaders[] = TABLE_HEADERS;
}
