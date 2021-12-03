import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './home-component/footer/footer.component';
import { HeaderComponent } from './home-component/header/header.component';
import { BijouxComponent } from './bijoux/bijoux.component';
import { OuvertureComponent } from './ouverture/ouverture.component';
import { ThanksComponent } from './thanks/thanks.component';
import { CustomMetalComponent } from './custom/custom-metal/custom-metal.component';
import { CustomStoneComponent } from './custom/custom-stone/custom-stone.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CubeComponent } from './cube/cube.component';
import { CustomComponent } from './custom/custom.component';
import { CustomEngraveComponent } from './custom/custom-engrave/custom-engrave.component';

const routes: Routes = [
  { path: '', component: BijouxComponent },
  { path: 'welcome', redirectTo: '' },
  { path: 'bijoux', redirectTo: '' },
  { path: 'thanks', component: ThanksComponent },
  { path: 'formulaire', component: FormulaireComponent },
  {
    path: 'custom', component: CustomComponent,
    children: [
      { path: 'engrave', component: CustomEngraveComponent },
      { path: 'stone', component: CustomStoneComponent },
      { path: 'metal', component: CustomMetalComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BijouxComponent,
    OuvertureComponent,
    ThanksComponent,
    CustomEngraveComponent,
    CustomMetalComponent,
    CustomStoneComponent,
    FormulaireComponent,
    CubeComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) //enable those routes in module,


  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
