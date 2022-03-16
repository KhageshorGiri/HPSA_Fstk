import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.components';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './property/nav-bar/nav-bar.component';

import {HttpClientModule} from '@angular/common/http';
import { AddPropertyComponent } from './property/add-property/add-property.component';

import {Routes, RouterModule} from '@angular/router';
import { PropertDetailsComponent } from './property/propert-details/propert-details.component';
import { PropertyNotFoundComponent } from './property/property-not-found/property-not-found.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { UserLoginComponent } from './User/user-login/user-login.component'

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

const appRoutes : Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-list', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'property-details/:id', component: PropertDetailsComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: '**', component: PropertyNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertDetailsComponent,
    PropertyNotFoundComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
