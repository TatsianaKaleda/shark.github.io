import {Component} from "@angular/core";
import {MenuItemsModel} from 'src/app/models/menuItems.model';
import {SlideModel} from "../../../models/slide.model";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  public menuCategory: MenuItemsModel[] = [
    {
      name: "ДЕСЕРТЫ",
      active: true
    },
    {
      name: "ХЛЕБ И ВЫПЕЧКА"
    },
    {
      name: "СОУСЫ И НАМАЗКИ"
    },
    {
      name: "НАПИТКИ"
    },
    {
      name: "ЗАВТРАКИ"
    },
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
      image: "pancakes.jpg",
      count: 2,
      isAvailable: true,
      availableDays: [0, 1],
    },
    {
      id: 2,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      image: "pancakes.jpg",
      count: 2,
      isAvailable: false,
      availableDays: [0, 1],
    },
    {
      id: 3,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      count: 2,
      image: "pancakes.jpg",
      isAvailable: false,
      availableDays: [0, 1],
    },
    {
      id: 4,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      count: 2,
      image: "pancakes.jpg",
      isAvailable: false,
      availableDays: [0, 1],
    },
    {
      id: 5,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      count: 2,
      image: "pancakes.jpg",
      isAvailable: true,
      availableDays: [0, 1],
    }
  ];
}
