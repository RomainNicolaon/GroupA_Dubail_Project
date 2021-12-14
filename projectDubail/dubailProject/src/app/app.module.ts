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
import { CustomEngraveComponent } from './custom/custom-engrave/custom-engrave.component';
import { DataService } from './data.service';
import { RingComponent } from './3D Render/ring/ring.component';
import { EarringComponent } from './3D Render/earring/earring.component';
import { NecklaceComponent } from './3D Render/necklace/necklace.component';
import { BraceletComponent } from './3D Render/bracelet/bracelet.component';

const routes: Routes = [
  { path: '', component: BijouxComponent },
  { path: 'welcome', redirectTo: '' },
  { path: 'bijoux', redirectTo: '' },
  { path: 'thanks', component: ThanksComponent },
  { path: 'formulaire', component: FormulaireComponent },
  {
    path: 'bracelet', component: BraceletComponent,
    children: [
      { path: 'engrave', component: CustomEngraveComponent },
      { path: 'stone', component: CustomStoneComponent },
      { path: 'metal', component: CustomMetalComponent }
    ]
  },
  {
    path: 'earring', component: EarringComponent,
    children: [
      { path: 'engrave', component: CustomEngraveComponent },
      { path: 'stone', component: CustomStoneComponent },
      { path: 'metal', component: CustomMetalComponent }
    ]
  },
  {
    path: 'necklace', component: NecklaceComponent,
    children: [
      { path: 'engrave', component: CustomEngraveComponent },
      { path: 'stone', component: CustomStoneComponent },
      { path: 'metal', component: CustomMetalComponent }
    ]
  },
  {
    path: 'ring', component: RingComponent,
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
    RingComponent,
    EarringComponent,
    NecklaceComponent,
    BraceletComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) //enable those routes in module,


  ],
  providers: [Title, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
