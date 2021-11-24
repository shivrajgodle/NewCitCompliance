import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorModule } from './administrator/administrator.module';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    component:HomepageComponent
  },
  {
    path:"admin",
    loadChildren: () => AdministratorModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
