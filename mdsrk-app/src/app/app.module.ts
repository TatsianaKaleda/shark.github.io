import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

//Application components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { NavbarComponent } from "./main/components/navbar/navbar.component";
import { BannerComponent } from "./main/components/banner/banner.component";
import { DinnerComponent } from "./main/components/dinner/dinner.component";
import { MenuComponent } from "./main/components/menu/menu.component";
import { AboutComponent } from "./main/components/about/about.component";
import { EcoComponent } from "./main/components/eco/eco.component";
import { ReviewsComponent } from "./main/components/reviews/reviews.component";
import { FooterComponent } from "./footer/footer.component";
import { SlideComponent } from "./shared/slide/slide.component";

//Material components
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from "@angular/material/expansion";

// const appComponents = [
//   AppComponent,
//   FooterComponent,
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavbarComponent,
    BannerComponent,
    DinnerComponent,
    MenuComponent,
    AboutComponent,
    EcoComponent,
    ReviewsComponent,
    FooterComponent,
    SlideComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        SlickCarouselModule,
        MatButtonModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
