import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { EditComponent } from './edit/edit.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'edit', component: EditComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private route: Router) {
  }

}
