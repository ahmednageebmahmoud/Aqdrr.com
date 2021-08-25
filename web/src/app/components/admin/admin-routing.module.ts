import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', component: AdminPanelComponent, data: { title: 'sideMenu.Admin' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
