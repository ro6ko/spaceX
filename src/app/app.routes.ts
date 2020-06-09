import { Routes } from '@angular/router';

// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CapsuleListComponent } from './capsule-list/capsule-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'capsule-list',
    component: CapsuleListComponent,
    data: {
      title: "Capsule List"
    }
  },
  // {
  //   path: 'register',
  //   loadChildren:  () => import('./register-form/register-form.module').then(m => m.RegisterFormModule)
  // },
  // {
  //   path: 'feedback',
  //   loadChildren:  () => import('./feedback/feedback.module').then(m => m.FeedbackModule)
  // },
  // {
  //   path: 'administration',
  //   loadChildren:  () => import('./administration/administration.module').then(m => m.AdministrationModule)
  // },
  {
    path: '**',
    redirectTo: '/'
  }
];
