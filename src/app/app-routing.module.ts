import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { InputComponent } from './input/input.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', redirectTo:'get-data', pathMatch: 'full' },
  { path: 'get-data', component: InputComponent },
  { path: 'json-data', component: FirstComponent },
  { path: 'show-data', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
