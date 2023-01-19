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
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [CarouselComponent, HomeComponent, TechnologiesComponent, ActivitesComponent, ProjectsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
})
export class ComponentsModule { }
