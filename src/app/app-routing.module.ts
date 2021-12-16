import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BraceletComponent } from './3D-Render/bracelet/bracelet.component';
import { EarringComponent } from './3D-Render/earring/earring.component';
import { NecklaceComponent } from './3D-Render/necklace/necklace.component';
import { RingComponent } from './3D-Render/ring/ring.component';
import { BijouxComponent } from './bijoux/bijoux.component';
import { CustomEngraveComponent } from './custom/custom-engrave/custom-engrave.component';
import { CustomMetalComponent } from './custom/custom-metal/custom-metal.component';
import { CustomStoneComponent } from './custom/custom-stone/custom-stone.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: '', component: BijouxComponent },
  { path: 'welcome', redirectTo: '' },
  { path: 'bijoux', redirectTo: '' },
  { path: 'thanks', component: ThanksComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'bracelet', component: BraceletComponent,
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
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
