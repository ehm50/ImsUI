import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './home/feed/feed.component';
import { IssuesModule } from './issues/issues.module';
import { IssuesService } from './shared/issues.service';
import { UsersService } from './shared/users.service';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IssuesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [IssuesService, UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
