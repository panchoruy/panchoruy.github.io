// Imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Declarations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PhotographyComponent } from './photography/photography.component';
import { HomeComponent } from './home/home.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
// Providers
import { PhotoService } from './photo.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PhotographyComponent,
    HomeComponent,
    HomeButtonComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
