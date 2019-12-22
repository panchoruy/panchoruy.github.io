// Imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// Declarations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PhotographyComponent } from './photography/photography.component';
import { HomeComponent } from './home/home.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { PhotoComponent } from './photo/photo.component';

// Providers
import { PhotoService } from './photo.service';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PhotographyComponent,
    HomeComponent,
    MenuToolbarComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    AboutComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
