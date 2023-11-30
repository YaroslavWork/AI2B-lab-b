import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  elements: string[];
  inputText: string;

  constructor() {
    this.elements = [];
    this.inputText = '';
  }

  ngOnInit(): void {

  }

  inputToArray(blockIfEmpty = false): void {
    if (this.inputText !== '' && !blockIfEmpty) {
      this.elements.push(this.inputText);
      this.inputText = '';
    }
  }

  removeElement(index: number): void {
    this.elements.splice(index, 1);
  }

  clearList(): void {
    this.elements = [];
  }

}
