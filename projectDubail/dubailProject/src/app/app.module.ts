import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './home-component/footer/footer.component';
import { HeaderComponent } from './home-component/header/header.component';
import { BijouxComponent } from './bijoux/bijoux.component';
import { OuvertureComponent } from './ouverture/ouverture.component';
import { ThanksComponent } from './thanks/thanks.component';
import { CustomEngraveComponent } from './custom-engrave/custom-engrave.component';
import { CustomMetalComponent } from './custom-metal/custom-metal.component';
import { CustomStoneComponent } from './custom-stone/custom-stone.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  { path: '', component:BijouxComponent},
  { path: 'welcome', redirectTo: ''},
  { path: 'bijoux', redirectTo: '' },
  { path: 'customEngravement', component: CustomEngraveComponent},
  { path: 'customMetal', component: CustomMetalComponent},
  { path: 'customStone', component: CustomStoneComponent},
  { path: 'thanks', component: ThanksComponent},
  { path: 'formulaire', component: FormulaireComponent}
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
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) //enable those routes in module,
    

  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
