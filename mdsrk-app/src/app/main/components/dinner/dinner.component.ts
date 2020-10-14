import {Component} from "@angular/core";
import {WeekDayModel} from 'src/app/models/weekDay.model';
import {SlideModel} from "../../../models/slide.model";

@Component({
  selector: 'dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})

export class DinnerComponent {

  public weekDays: WeekDayModel[] = [
    {
      name: "ПОНЕДЕЛЬНИК"
    },
    {
      name: "ВТОРНИК"
    },
    {
      name: "СРЕДА",
      active: true
    },
    {
      name: "ЧЕТВЕРГ"
    },
    {
      name: "ПЯТНИЦА"
    },
    {
      name: "СУББОТА"
    },
    {
      name: "ВОСКРЕСЕНЬЕ"
    }
  ];

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "infinite": true
  };


  public slides: SlideModel[] = [
    {
      id: 1,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      image: "salad.jpg",
      count: 2,
      availableDays: [0, 1]
    },
    {
      id: 2,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      image: "salad.jpg",
      count: 2,
      availableDays: [0, 1]
    },
    {
      id: 3,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      count: 2,
      image: "salad.jpg",
      availableDays: [0, 1]
    },
    {
      id: 4,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      count: 2,
      image: "salad.jpg",
      availableDays: [0, 1]
    },
    {
      id: 5,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      count: 2,
      image: "salad.jpg",
      availableDays: [0, 1]
    }
  ];
}
