import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  grid:boolean=true
  gridCount=Array(21)
  toggele(){
    this.grid = !this.grid
  }

}
