import {Component} from "@angular/core";
import {MenuItemsModel} from "../../../models/menuItems.model";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './navbar.component.media.scss']
})

export class NavbarComponent {
  public menuItems: MenuItemsModel[] = [
    {
      name: "ЗАВТРАКИ"
    },
    {
      name: "ОБЕДЫ"
    },
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
    }
  ];

  public showMobileMenu: boolean = false;

  public toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
    let body: HTMLElement = document.getElementsByTagName('body')[0];
    if (this.showMobileMenu) {
      window.scrollTo(0, 0)
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'auto';
    }
  }
}
