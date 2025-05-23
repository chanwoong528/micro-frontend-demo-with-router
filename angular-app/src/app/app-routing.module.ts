import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { NotFoundPageComponent } from './pages/404/notfound-page.component';

export const routes: Routes = [
  {
    path: 'angular', pathMatch: 'prefix', children: [
      {
        path: '', component: HomePageComponent,
        data: { title: 'Home' }
      },
      {
        path: 'about', component: AboutPageComponent,
        data: { title: 'About' }
      },
      {
        path: '**', component: NotFoundPageComponent,

      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }