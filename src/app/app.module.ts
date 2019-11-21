import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NotesService } from './services/notes.service';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateRouteGuard],
  }
];
@NgModule({
  declarations: [ AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent ],
  imports: [ BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes) ],
  providers: [ NotesService,
    AuthenticationService,
    RouterService,
    CanActivateRouteGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
