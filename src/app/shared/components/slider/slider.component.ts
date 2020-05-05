import { Component, OnInit } from '@angular/core';

import { Slide } from "../../models/slide.model";
import { SLIDES } from "../../mock/mock-slider";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides: Slide[] = SLIDES;

  constructor() {
  }

  ngOnInit(): void {
  }

}
