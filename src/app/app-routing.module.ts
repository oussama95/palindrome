import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParseRouteComponent} from "./parse-route/parse-route.component";

const routes: Routes = [
  {path:"start/:mot",component:ParseRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
