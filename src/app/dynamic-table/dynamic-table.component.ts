import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  constructor() { }
  shortingOrder = 0
  tableData = []
  tableDataRaw = [
    {
      Name: "shubham",
      Class: "3",
      Section: "D",
      Sub1: 65,
      Sub2: 44,
      Sub3: 56,

    },
    {
      Name: "alok",
      Class: "3",
      Section: "F",
      Sub1: 75,
      Sub2: 74,
      Sub3: 56,

    },
    {
      Name: "Ashok",
      Class: "3",
      Section: "B",
      Sub1: 65,
      Sub2: 64,
      Sub3: 66,

    },
    {
      Name: "shivam",
      Class: "3",
      Section: "C",
      Sub1: 55,
      Sub2: 54,
      Sub3: 56,

    },
    {
      Name: "Adhrit",
      Class: "3",
      Section: "A",
      Sub1: 43,
      Sub2: 34,
      Sub3: 55,

    }
  ]

  ngOnInit(): void {
    this.tableData = [...this.tableDataRaw]
  }
  shortBy(coloum: string) {
    this.shortingOrder++
    if (this.shortingOrder == 1) {
      this.tableData.sort((a, b) => a[coloum] > b[coloum] ? 1 : -1)
    } else if (this.shortingOrder == 2) {
      this.tableData.sort((a, b) => b[coloum] < a[coloum] ? -1 : 1)
    } else {
      this.shortingOrder = 0
      this.tableData = [...this.tableDataRaw]
    }

  }

}
