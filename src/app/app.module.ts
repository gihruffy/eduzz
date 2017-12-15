import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCandidatesComponent } from './edit-candidates/edit-candidates.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'editar/:id', component: EditCandidatesComponent}
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditCandidatesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
