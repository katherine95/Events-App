import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component Imports
import { HomeComponent }  from './components/events/home.component';
import { EventsListComponent } from './components/events/events-list.component';
import { EventsThumbnailComponent } from './components/events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
     HomeComponent,
     EventsListComponent,
     EventsThumbnailComponent,
     NavBarComponent

   ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
