import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { AjouterArticleFormComponent } from './ajouter-article-form/ajouter-article-form.component';
import { AccessoireOrdiComponent } from './accessoire-ordi/accessoire-ordi.component';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';
import { TelephoneFixComponent } from './telephone-fix/telephone-fix.component';
import { AccessoireTelfixComponent } from './accessoire-telfix/accessoire-telfix.component';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { UsbComponent } from './usb/usb.component';
import { AccessoireStockageComponent } from './accessoire-stockage/accessoire-stockage.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'PcPortable', component: PcPortableComponent},
  { path: 'PcBureau', component: PcBureauComponent},
  { path: 'Connexion', component: ConnexionComponent},
  { path: 'AjouterAticleForm', component: AjouterArticleFormComponent},
  { path: 'AccessoireOrdi', component: AccessoireOrdiComponent},
  { path: 'SmartPhone', component: SmartPhoneComponent},
  { path: 'telephoneFix', component: TelephoneFixComponent},
  { path: 'AccessoireTelFix', component: AccessoireTelfixComponent},
  { path: 'DisqueDur', component: DisqueDurComponent},
  { path: 'USB', component: UsbComponent},
  { path: 'AccessoireStock', component : AccessoireStockageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
