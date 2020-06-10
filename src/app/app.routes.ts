import { Routes } from '@angular/router';

import { CapsuleListComponent } from './capsule-list/capsule-list.component';
import { CapsuleDetailsComponent } from './capsule-details/capsule-details.component';
import { DragonsListComponent } from './dragon-list/dragon-list.component';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';

export const routes: Routes = [
  {
    path: 'capsule-list',
    component: CapsuleListComponent,
    data: {
      title: "Capsule List"
    }
  },
  {
    path: 'capsule-details/:id',
    component: CapsuleDetailsComponent,
    data: {
      title: "Capsule Details"
    }
  },
  {
    path: 'dragon-list',
    component: DragonsListComponent,
    data: {
      title: "Dragon List"
    }
  },
  {
    path: 'dragon-details/:id',
    component: DragonDetailsComponent,
    data: {
      title: "Dragon Details"
    }
  },
  {
    path: '**',
    redirectTo: '/capsule-list'
  }
];
