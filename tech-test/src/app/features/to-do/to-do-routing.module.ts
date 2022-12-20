import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoOverviewComponent } from './pages/to-do-overview/to-do-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoRoutingModule {
}
