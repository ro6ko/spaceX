import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CapsuleListComponent } from './capsule-list/capsule-list.component';
import { CapsulePastComponent } from './capsule-past/capsule-past.component';
import { CapsuleUpcomingComponent } from './capsule-upcoming/capsule-upcoming.component';
import { CapsuleDetailsComponent } from './capsule-details/capsule-details.component';
import { DragonsListComponent } from './dragon-list/dragon-list.component';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CapsuleListComponent,
    CapsulePastComponent,
    CapsuleUpcomingComponent,
    CapsuleDetailsComponent,
    DragonsListComponent,
    DragonDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
