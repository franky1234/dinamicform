import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormModule } from '../form/form.module';
const appRoutes = [
  { path: 'form', loadChildren: 'app/form/form.module#FormModule'  },
  { path: '',   redirectTo: 'form', pathMatch: 'full'  }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
