// Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material Components
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

// Providers
import { PhotoService } from './photo.service';

// Declarations
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { MicrogreensComponent } from './microgreens/microgreens.component';
import { NewMicrogreenEntryComponent } from './new-microgreen-entry/new-microgreen-entry.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotographyComponent } from './photography/photography.component';
import { ProjectsComponent } from './projects/projects.component';

// Environment
import { environment } from '../environments/environment';
import { PlantNewComponent } from './plant-new/plant-new.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    MenuToolbarComponent,
    MicrogreensComponent,
    NewMicrogreenEntryComponent,
    PageNotFoundComponent,
    PhotoComponent,
    PhotographyComponent,
    ProjectsComponent,
    PlantNewComponent,
    PlantDetailsComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  providers: [
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
