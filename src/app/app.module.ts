import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BraceletComponent } from './3D-Render/bracelet/bracelet.component';
import { EarringComponent } from './3D-Render/earring/earring.component';
import { NecklaceComponent } from './3D-Render/necklace/necklace.component';
import { RingComponent } from './3D-Render/ring/ring.component';
import { BijouxComponent } from './bijoux/bijoux.component';
import { CustomEngraveComponent } from './custom/custom-engrave/custom-engrave.component';
import { CustomMetalComponent } from './custom/custom-metal/custom-metal.component';
import { CustomStoneComponent } from './custom/custom-stone/custom-stone.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FooterComponent } from './home-component/footer/footer.component';
import { HeaderComponent } from './home-component/header/header.component';
import { OuvertureComponent } from './ouverture/ouverture.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [AppComponent, BraceletComponent, EarringComponent, NecklaceComponent, RingComponent, BijouxComponent, CustomEngraveComponent, CustomMetalComponent, CustomStoneComponent, FormulaireComponent, FooterComponent, HeaderComponent, OuvertureComponent, ThanksComponent, HeaderComponent, FooterComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
