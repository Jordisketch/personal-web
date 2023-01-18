import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../material.module";
import {HttpClientModule} from "@angular/common/http";
import {CarouselComponent} from "./carousel/carousel.component";
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ActivitesComponent } from './activites/activites.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {MatListModule} from "@angular/material/list";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [CarouselComponent, HomeComponent, TechnologiesComponent, ActivitesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatListModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule
  ],
})
export class ComponentsModule { }
