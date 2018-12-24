import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputUserComponent } from './input-user/input-user.component';
import { GetUserService } from './serves/get-user.service';

@NgModule({
  declarations: [
    AppComponent,
    InputUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
