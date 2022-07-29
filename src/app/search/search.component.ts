import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  searchText: string = '';

  search() {
    console.log(this.searchText);
    this.searchTextChanged.emit(this.searchText);
  }

  reset() {
    console.log(this.searchText);
    this.searchText = '';
    this.searchTextChanged.emit('');
  }

}
