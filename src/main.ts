import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './app/services/auth.service';
import { RepositoriesService } from './app/services/repositories.service';
import { BookmarksService } from './app/services/bookmarks.service';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(), // HttpClient
      AuthService, 
      RepositoriesService,
      BookmarksService
       
    ],     
  }).catch((err) => console.error(err));