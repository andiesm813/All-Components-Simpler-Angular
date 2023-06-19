import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MostComponentsComponent } from './most-components/most-components.component';
import { EmptyComponent } from './empty/empty.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: '', redirectTo: 'most-components', pathMatch: 'full' }, { path: 'most-components', component: MostComponentsComponent, data: { text: 'Most-components' } },
  { path: 'empty', component: EmptyComponent, data: { text: 'Empty' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
