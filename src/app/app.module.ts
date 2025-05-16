import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { AppsComponent } from './apps/apps.component';
import { SoftwareComponent } from './software/software.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SliderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    WorkComponent,
    NotFoundComponent,
    GraphicDesignComponent,
    AppsComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
