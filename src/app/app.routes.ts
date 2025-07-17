import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ParticulierComponent } from './particulier/particulier.component';
import { ProfessionnelEntrepriseComponent } from './professionnel-entreprise/professionnel-entreprise.component';
import { AssociationCorporationComponent } from './association-corporation/association-corporation.component';
import { LoginComponent } from './login/login.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { TrouverAgencesComponent } from './trouver-agences/trouver-agences.component';
import { SignupComponent } from './signup/signup.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { ChatComponent } from './chat/chat.component';
import {SinistreComponent} from "./sinistre/sinistre.component";
import {DevisComponent} from "./devis/devis.component";
import {AuthGuard} from "./authe.guard";
import {ProfilComponent} from "./profil/profil.component";



export const routes: Routes = [
    {path:'', component:PrincipalComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'about',component:AboutUsComponent},
    {path:'contact', component:ContactUsComponent},
    {path:'particulier', component:ParticulierComponent},
    {path:'proffesionnel-entreprise', component:ProfessionnelEntrepriseComponent},
    {path:'association-corporation', component:AssociationCorporationComponent},
    {path:'login', component:LoginComponent},
    {path:'reclamation', component:ReclamationComponent,canActivate:[AuthGuard]},
    {path:'trouver-agence', component:TrouverAgencesComponent},
    {path:'signup', component:SignupComponent},
    {path:'app-mobile', component:MobileAppComponent},
  {path:'sinistre',component:SinistreComponent},
  {path:'devis', component:DevisComponent,canActivate:[AuthGuard]},
  {path:'profil', component:ProfilComponent,canActivate:[AuthGuard]}

];
