// Imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

// Providers
import { PhotoService } from './photo.service';

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
import { MicrogreensComponent } from './microgreens/microgreens.component';
import { NewMicrogreenEntryComponent } from './new-microgreen-entry/new-microgreen-entry.component';



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
    PhotoComponent,
    MicrogreensComponent,
    NewMicrogreenEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
