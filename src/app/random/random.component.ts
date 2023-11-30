import {Component, Input, OnInit} from '@angular/core';
import {RandomService} from "../random.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent implements OnInit {
  myNumber!: number;
  @Input() max = 10;

  constructor(private randomService: RandomService) {
  }

  ngOnInit(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  btnClick(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  comparisonNumberToMaxValue(): number {
    if (this.myNumber < this.max / 2) {
      return 0;  // 0 - smaller than half
    } else if (this.myNumber > this.max / 2) {
      return 1;  // 1 - bigger than half
    } else {
      return 2;  // 2 - equal to half
    }
  }
}
