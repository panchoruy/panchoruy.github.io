import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotographyComponent } from './photography/photography.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "photography", component: PhotographyComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "about", component: AboutComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
