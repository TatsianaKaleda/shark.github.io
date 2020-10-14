import {Component} from "@angular/core";
import {SlideModel} from "../../../models/slide.model";

@Component({
  selector: 'eco',
  templateUrl: './eco.component.html',
  styleUrls: ['./eco.component.scss']
})

export class EcoComponent {
  public slides: SlideModel[] = [
    {
      id: 1,
      name: "Масло кокосовое",
      weight: 170,
      price: 2.5,
      image: "pure.jpg",
      count: 2,
      isAvailable: true,
      category: ["Натуральные масла"],
      availableDays: [0, 1],
      labels: [
        {
          name: "Новинка",
          color: "#8AC9A3"
        }
      ]
    },
    {
      id: 1,
      name: "Шоколад на меду горький Вкус и Польза",
      weight: 170,
      price: 2.5,
      image: "choco.jpg",
      count: 2,
      isAvailable: true,
      category: ["Сладости", "шоколад", "сиропы"],
      availableDays: [0, 1],
      labels: [
        {
          name: "Хит",
          color: "#8ABEC9"
        }
      ]
    },
    {
      id: 1,
      name: "Маринованная красная капуста",
      weight: 170,
      price: 2.5,
      image: "vegetables.jpg",
      count: 2,
      isAvailable: true,
      category: ["Натуральные масла"],
      availableDays: [0, 1],
      labels: [
        {
          name: "Хит",
          color: "#8ABEC9"
        },
        {
          name: "Новинка",
          color: "#8AC9A3"
        }
      ]
    },
    {
      id: 1,
      name: "Масло кокосовое",
      weight: 170,
      price: 2.5,
      image: "vegetables.jpg",
      count: 2,
      isAvailable: true,
      category: ["Натуральные масла"],
      availableDays: [0, 1],
      labels: [
        {
          name: "Акция",
          color: "#F16254"
        }
      ]
    },
    {
      id: 2,
      name: "Шоколад на меду горький Вкус и Польза",
      weight: 170,
      price: 2.5,
      image: "pure.jpg",
      count: 2,
      isAvailable: false,
      category: ["Натуральные масла"],
      availableDays: [0, 1],
      labels: [
        {
          name: "Новинка",
          color: "#8AC9A3"
        }
      ]
    },
    {
      id: 3,
      name: "Маринованная красная капуста",
      weight: 170,
      price: 2.5,
      count: 2,
      image: "choco.jpg",
      isAvailable: false,
      category: ["десерты"],
      availableDays: [0, 1],
      labels: [
        {
          name: "Хит",
          color: "#8ABEC9"
        }
      ]
    },
    {
      id: 4,
      name: "Маринованная красная капуста",
      weight: 170,
      price: 2.5,
      count: 2,
      image: "vegetables.jpg",
      isAvailable: false,
      category: ["Натуральные масла"],
      availableDays: [0, 1],
      labels: [
        {
          name: "Хит",
          color: "#8ABEC9"
        },
        {
          name: "Новинка",
          color: "#8AC9A3"
        }
      ]
    },
    {
      id: 5,
      name: "Морковный крем-суп с имбирем и печеным нутом",
      weight: 170,
      price: 2.5,
      count: 2,
      image: "vegetables.jpg",
      isAvailable: true,
      category: ["десерты"],
      availableDays: [0, 1],
      labels: [
        {
          name: "Акция",
          color: "#F16254"
        }
      ]
    }
  ];
}
