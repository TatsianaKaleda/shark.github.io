import {Component, Input} from "@angular/core";
import {SlideModel} from "../../models/slide.model";

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})

export class SlideComponent {
  @Input()
  public slide: SlideModel;
}
