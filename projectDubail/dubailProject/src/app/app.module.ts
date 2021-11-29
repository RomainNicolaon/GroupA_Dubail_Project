import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './home-component/footer/footer.component';
import { HeaderComponent } from './home-component/header/header.component';
import { BijouxComponent } from './bijoux/bijoux.component';

const routes: Routes = [
  { path: 'bijoux', component: BijouxComponent }
  // {path:'home', redirectTo: ''},
 
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BijouxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) //enable those routes in module,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
