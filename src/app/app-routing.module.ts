import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { AppsComponent } from './apps/apps.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'skills', component: SkillsComponent, title: 'Skills' },
  { path: 'experience', component: ExperienceComponent, title: 'Experience' },
  {
    path: 'work',
    component: WorkComponent,
    title: 'Work',
    children: [
      {
        path: '',
        component: GraphicDesignComponent,
        title: 'Graphic Design',
      },
      {
        path: 'graphic-design',
        component: GraphicDesignComponent,
        title: 'Graphic Design',
      },
      {
        path: 'apps',
        component: AppsComponent,
        title: 'Apps',
      },
      {
        path: 'software',
        component: SoftwareComponent,
        title: 'Software',
      },
    ],
  },
  { path: 'not-found', component: NotFoundComponent, title: '404 - Not Found' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
