import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
//import { RoutesGuardService } from './../shared/services/routes-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home.module').then(m => m.HomeModule)
      },
      /* {
        path: 'comprobante',
        data: { ctxName: 'comprobante', redirect: 'simulacion-y-contratacion'  },
        loadChildren: () => import('./../comprobante/comprobante.module').then(m => m.ComprobanteModule)
      }, */
      /* { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' } */
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
