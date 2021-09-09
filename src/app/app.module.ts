import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetService } from './get.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
