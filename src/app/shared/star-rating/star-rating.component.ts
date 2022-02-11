import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';



@Component({
  selector: 'dm-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit {
  

  @Input() rate = 0;
  @Input() count = 0;

  cropWidth: number = 75;
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.cropWidth = (this.rate * 75) / 5;
  }
  tooltipPosition: TooltipPosition = 'right';  

}
